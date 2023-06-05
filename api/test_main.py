from fastapi.testclient import TestClient
from api import app
from fastapi import status
import os

client=TestClient(app=app)

def test_text_image_generation():
    response = client.get('/?prompt=a picture of messi')
    assert response.status_code == status.HTTP_200_OK
    image_path = os.getcwd() + "/outputs/txt2img-samples/a_picture_of_messi/0.png"
    image_created =  os.path.isfile(image_path)
    assert image_created
    if image_created:
        os.remove(image_path)
