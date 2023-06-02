# Scopic Interview

This repository is made up of three folders(application); the front-end app (client), the backend app (api) and the training folder.

## Tools used

In this task, I needed to find a paper that showed an approach to generate an image based on an input text. I chose the paper [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752). Moreover, I used the Stable Diffusion Learning model made by Stability AI and Runaway. The original GitHub repository can be found [here](https://github.com/CompVis/stable-diffusion).

I also needed to create a sample web page that took a text as an input and outputs the image result. The frontend application was built using `React` while the backend application was built with the `FastAPI` framework. 


## Set-up

### Requirements
* Node.js
* npm
* Conda

To setup the application please clone this repository.

### Backend

#### Requirements
Navigate to the `api` subdirectory and follow the instructions specified in the section "Requirements" of its `README.md` file to setup the requirements for stable diffusion. Then, put your downloaded model with the name `model_trained.ckpt` file into the `api` folder.

#### Start Server

Then, you can run the backend with:

    uvicorn api:app --reload

#### Modifications made to orignal Stable Diffusion

Since I have a NVIDIA GeForce RTX 2060 GPU, I needed a modified version of Stable Diffusion repo, optimized to use less VRAM than the original by sacrificing inference speed. To do this, I added the [optimized SD](https://github.com/basujindal/stable-diffusion/tree/main/optimizedSD) folder to the `api` folder, changed the format in which images could be saved and the name searched for uploading the model to `model_trained.ckpt`. I also added an `api` file in which the whole backend of the application is done. The `environment.yaml` file was also modified to include the installation of FastAPI

### FrontEnd

#### Requirements
Navigate to the `client` folder and install its dependencies:
    
    cd client
    npm install .

#### Start Web Interface

    cd client
    npm start

### ScreenShot of the application

In the next two images, I show screen shots of the application generating an image based on an input text. The second image tries to generate a picture of myself since in the training section, I trained the model with some pictures of myself. 

<img src="https://drive.google.com/file/d/1JNg5J-ScoCl-2BBCretX2HD_9MeadyJX/view?usp=sharing" width="800" height="700">

<img src="https://drive.google.com/file/d/1tihMG4xc1nai5UloUcRWEvxh3p9hr0YR/view?usp=sharing" width="800" height="700">

### Training 

-   Run [`Copy_of_DreamBooth_Stable_Diffusion.ipynb`][https://colab.research.google.com/drive/15RoZt_6Mo0NFB1QWQ5yLu-dev-axj8eY#scrollTo=K6xoHWSsbcS3].
[![Open In Colab][colab-badge]][https://colab.research.google.com/drive/15RoZt_6Mo0NFB1QWQ5yLu-dev-axj8eY#scrollTo=K6xoHWSsbcS3]
