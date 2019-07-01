import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'

const App = () => {
	return ( <div className="ui container comments">
				<CommentDetail
				author="Sam"
				timeAgo="Today at 3:45PM" 
				text="blah" 
				avatar={faker.image.avatar()}
				/>
				<CommentDetail
				 author="Alex" 
				 timeAgo="Today at 2:45PM" 
				 text="blah"
				 avatar={faker.image.avatar()}
				 />
				<CommentDetail author="Jane"
				timeAgo="Today at 1:45PM"
				text="blah"
				avatar={faker.image.avatar()}
				/>

			</div>	
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));