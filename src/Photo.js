import React, { Component } from 'react';

class Photo extends Component{
    constructor(props){
        super(props);
        this.state = {
            photos: [],
            photosLoaded: false,
            index: 0
        };
    }

    loadPhotos(path){
        return path.keys().map(path);
    }

   setPhotos(){
        var photos = this.loadPhotos(require.context("./photos", false, /\.(png|jpe?g|svg)$/));
        this.setState({photos: photos});
    }

    nextPhoto(){
        var i = this.state.index;
        var length = this.state.photos.length;
        if(i < (length - 1))
            this.setState({index: i + 1 });
        else    
            return
    }

    previousPhoto(){
        var i = this.state.index;
        if(i > 0)
            this.setState({index: i - 1 });
        else    
            return
    }

    componentWillMount(){
        this.setPhotos();
    }

    render(){
        var photos = this.state.photos;
        var i = this.state.index;
        return (
            <div className="Photo">
                <img src={photos[i]} className="Photo-image" alt="display"/>
                <div className="photo-nav-bar">
                    <div className="photo-nav-button"
                        onClick={() => this.previousPhoto()}>
                        <a href="#">
                            Previous
                        </a>
                    </div>
                    <div className="photo-nav-button"
                        onClick={() => this.nextPhoto()}>
                        <a href="#">
                            Next
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Photo;