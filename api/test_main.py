from fastapi.testclient import TestClient
from api import app
from fastapi import status
import os

client=TestClient(app=app)

def test_text_image_generation():
    response = client.get('/?prompt=a picture of messi')
    assert response.status_code == status.HTTP_200_OK
    assert os.path.isfile(os.getcwd() + "/outputs/txt2img-samples/a picture of messi/0.png")
