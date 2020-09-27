from flask import Flask,render_template,url_for
app=Flask(__name__,static_url_path='/static') #to fetch images from static folder
@app.route('/')
def index():
    return render_template('index.html')