import React, { Component } from 'react';
import axios from 'axios';
import "./card.css"
import {Link} from 'react-router-dom';
import iconnn from '../iconn.png';
import {connect} from 'react-redux';

class Home extends Component {
    


    render ()
    {
        const {posts}=this.props
        const postList=posts.length ? (
            posts.map(post =>{
                return (
                    // CARD GÖRÜNTÜSÜ FARKLI (ders-128 de)ve card.css dosyası var değişiklik yapılabilir.!!!!!
                    <div className="post row" key={post.id}>
                        <img src={iconnn} alt=""/>
                   <div className="col-s12-m6">
                      <div className="card blue darken-1">
                     <div className="card-content white-text">
                         <Link to={'/'+post.id}>
                       <span className="card-title black-text">{post.title}</span>
                       </Link>
                      <p>{post.body}</p>

                    </div>
                </div>
                </div>
    </div>
  
                )
                
            })
        ) : (
            <div className="center"> 
            No Post to show
            </div>
        );
        return (
            <div>
                <div className="home container">
    
                    <h4 className="center">Anasayfa</h4>
                    {postList}
                </div>
    
            </div>
        )
    

    }
    
}

const mapStateToProps =(state) =>
{
    return{
   posts:state.posts
    }
}
export default connect(mapStateToProps)(Home);