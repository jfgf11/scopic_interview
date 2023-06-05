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
    
    conda activate ldm
    uvicorn api:app --reload
    
### Test Server

Test the server with:
    
    conda activate ldm
    pytest test_main.py

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

<img src="https://drive.google.com/uc?export=view&id=1JNg5J-ScoCl-2BBCretX2HD_9MeadyJX" width="675" height="911">

<img src="https://drive.google.com/uc?export=view&id=1tihMG4xc1nai5UloUcRWEvxh3p9hr0YR" width="675" height="911">

### Training 

To train the model, I used the Dreambooth technique to fine-tune diffusion models by injecting a custom subject to the model. This is a methodology published by Google in 2022. To train the model, the Dreambooth methodology needs a minimum usage of 9.92GB of VRAM. As indicated before, I have a NVIDIA GeForce RTX 2060 GPU which has 6GB of VRAM. This is why, I had to train the model using google colab. To train the model in colab, I used a Tesla T4 GPU. The original repositroy for Dreambooth training can be found [here](https://github.com/ShivamShrirao/diffusers/tree/main/examples/dreambooth). The steps to run the training, requirements and sample input/output after training are clearly shown in the notebook. The trained model was uploaded to my drive and can be downloaded from [here](https://drive.google.com/file/d/1Tw_G7rTGw3I8aRwX-v0V-cqfwmzlee84/view?usp=sharing). To train the model , transfer learning was applied to [stable-diffusion-v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5) to train the model with images of myself. The Stable Diffusion model has 890 million parameters.

- Run [colab notebook](https://colab.research.google.com/drive/15RoZt_6Mo0NFB1QWQ5yLu-dev-axj8eY#scrollTo=K6xoHWSsbcS3)
