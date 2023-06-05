from fastapi.testclient import TestClient
from api import app
from fastapi import status
import os

client=TestClient(app=app)


def test_text_image_generation():
    """
    test_text_image_generation that tests the creation of images based on text.
    It generates a picture of messi and checks if the status of the request is OK and
    checks if the image of messi was generated, then it deletes the image.
    """ 
    response = client.get('/?prompt=a picture of messi')
    assert response.status_code == status.HTTP_200_OK
    image_path = os.getcwd() + "/outputs/txt2img-samples/a_picture_of_messi/0.png"
    image_created =  os.path.isfile(image_path)
    assert image_created
    if image_created:
        os.remove(image_path)
