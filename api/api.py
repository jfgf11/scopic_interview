from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
import base64
import subprocess
import os
from PIL import Image



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def generate_image(prompt: str):
    subprocess.call(["python", "optimized_txt2img.py", "--prompt", prompt])
    image = Image.open(os.getcwd() + "/outputs/txt2img-samples/" + prompt.replace(" ", "_") + "/0.png")
    buffer = BytesIO()
    image.save(buffer, format="PNG")
    imgstr = base64.b64encode(buffer.getvalue())
    return Response(content=imgstr, media_type="image/png")
