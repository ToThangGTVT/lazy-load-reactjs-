import React from 'react'
import { Card } from 'react-bootstrap'

export default class CardInfo extends React.Component {

	render() {
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>{this.props.data.title}</Card.Title>
					<Card.Text>
						{this.props.data.body}
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}