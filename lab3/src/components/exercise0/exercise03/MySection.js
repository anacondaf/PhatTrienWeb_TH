import * as React from "react";

class MySection extends React.Component {
	render() {
		return (
			<section>
				<h2>Sign up for newsletter</h2>
				{this.props.children}
			</section>
		);
	}
}

export default MySection;
