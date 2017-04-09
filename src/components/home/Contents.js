import React, {Component} from 'react';
import Content from './Content';

const posts = [
  {id:'post0', title:'배가고프다', content:'저녁이나 먹어야지'},
  {id:'post1', title:'이사는 어디로 가나', content:'노숙으로 할까'},
  {id:'post2', title:'하...', content:'한숨만 쉬어'},
  {id:'post3', title:'감시 당하고 있어', content:'감시자는 누구?'}
];

class Contents extends Component{
  render(){

    const renderPosts = posts.map((post) => {
      return (
        <Content key={post.id} title={post.title} content={post.content}/>
      )
    });

    return(
      <div className="row">
        {renderPosts}
      </div>
    );
  }
}

export default Contents;
