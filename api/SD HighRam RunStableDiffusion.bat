call %userprofile%\anaconda3\Scripts\activate.bat ldm
set /P id=Enter Prompt And Options : 
python "scripts\txt2img.py" --ckpt "model.ckpt" --config "configs\stable-diffusion\v1-inference.yaml" %id%
cmd /k