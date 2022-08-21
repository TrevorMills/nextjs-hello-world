import React, { FC } from 'react';

/**
 * @usePostData
 * @post_type foo
 */
export interface IPostDataProps {
	title: string,
	/**
	 * This is my content area
	 *
	 * @control textarea
	 */
	content: string,
}

export interface IBarProps {
	option?: 'one' | 'two' | 'three';
	strings?: string[];
	number?: number;
	single?: IPostDataProps;
	multiple?: IPostDataProps[];
}

/**
 * This is the description of the Bar component
 *
 * @block
 */
const Bar: FC<IBarProps> = ({
	option,
	strings,
	number,
	single,
	multiple,
}) => {
	return <div className="bar">
		{ option && <div className="option">{option}</div>}
		{ strings && <div className="strings">{strings.join(' ')}</div>}
		{ number && <div className="number">{number}</div>}
		{ single && <div className="single"><h2>{single.title}</h2><p>{single.content}</p></div>}
		{ multiple && <div className="multiple">{multiple.map( post => <React.Fragment>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</React.Fragment>)}</div>}
	</div>
}

export default Bar;
