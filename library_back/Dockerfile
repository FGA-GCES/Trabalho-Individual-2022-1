FROM python:3

# maintainer
LABEL Author="fernandes-natanael"

ENV PYTHONDONTWRITEBYTECODE=1

# The enviroment variable ensures that the python output is set straight to the terminal with out buffering it first
ENV PYTHONUNBUFFERED=1

# directory to store app source code 
RUN mkdir /code

# define the work directory
WORKDIR /code

# copy requirements file
COPY requirements.txt /code/

#
# RUN python3 -m venv env

# RUN sudo /code env/bin/activate

# pip3 install required packages
RUN pip3 install --upgrade pip && \
    pip3 install -r requirements.txt

# copy the project to the /code directory
COPY . /code/

# migrate changes
# RUN python manage.py makemigrations 
# RUN python manage.py migrate

# EXPOSURE port
EXPOSE 8000