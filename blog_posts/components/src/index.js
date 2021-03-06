import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
	return ( <div className="ui container comments">
				<ApprovalCard>
					<CommentDetail
					author="Sam"
					timeAgo="Today at 3:45PM"
					text="Eu sou o Sam e queria apresentar"
					sentence="O amor e tudo que ha"
					avatar={faker.image.avatar()}
					/>
				</ApprovalCard>

				<ApprovalCard>
					<CommentDetail
					 author="Alex"
					 timeAgo="Today at 2:45PM"
					 text="Nossos amigos acabaram de chegar"
					 sentence="Sem amor eu nada seria"
					 avatar={faker.image.avatar()}
					 />
				</ApprovalCard>

				<ApprovalCard>
					<CommentDetail author="Jane"
					timeAgo="Today at 1:45PM"
					text="Somos amigos como na musica do Balao Magico"
					sentence="So o amor conhece o que e verdade"
					avatar={faker.image.avatar()}
					/>
				</ApprovalCard>
			</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
