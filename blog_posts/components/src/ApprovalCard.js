import React from 'react';

const ApprovalCard = props => {

	return(
		<div className="ui card">
			<div className="text">{props.children}</div>
			<div className="extra content">
				<div className="ui two buttons">
				<div className="ui basic blue button">Approve</div>
				<div className="ui basic orange button">Reject</div>
				</div>
			</div>
		</div>
	)

};

export default ApprovalCard;
