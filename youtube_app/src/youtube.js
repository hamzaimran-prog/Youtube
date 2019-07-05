import React,{Component} from 'react';

const API='AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelId='UCXgGY0wkgOzynnHvSEVmE3A';
const result = 20;

var finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`;


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10


class Youtube extends Component {

    constructor(props){

        super(props);
        this.state = {

            dataArr:[]

        }

    }

    _clickHandler(event){

        event.preventDefault();

        fetch(finalUrl)
        .then((response => response.json()))
        .then((responseJson) =>{

            console.log("RS",responseJson);
            const arr = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({
                
                
                dataArr:arr
            
            });


        })
        .catch((err) =>{

            console.log(err);

        });
        
        
        
        }
        

    render() { 
       // console.log(this.state.dataArr);
        return ( 

            <div>
                <button onClick={this._clickHandler.bind(this)}>Get Youtube Videos</button>
                {
                
                this.state.dataArr.map((videoLink,i) =>{

                    
                   var  iframe = <div className='youtubeDiv'><iframe key={i} width="560" height="315" src={videoLink}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen></iframe>
                    </div>
                    return iframe;
                })
                }

                {this.iframe}

            </div>

         );
    }
}
 
export default Youtube;

