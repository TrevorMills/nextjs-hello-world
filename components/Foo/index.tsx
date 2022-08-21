// I need to make a note of this somewhere.
// In early iterations, we would import React and then type our components with React.FC.
// However, in tests, which are run in a node environment, Typedoc wasn't picking up the
// doc comments.  I never figured out why.  The solution is to import and use { FC } explicitly.
// I'm not sure yet if this will have implications for all of our existing components, or if this
// is just a byproduct of the testing environment.
import React, { FC } from 'react';

export interface IFooProps {
	/**
	 * Here is a description of bar
	 */
	bar: string,
}

/**
 * Here is a description of the Foo component
 *
 * @block
 */
const Foo: FC<IFooProps> = ({
	bar= 'bar',
}) => {
	return <div className="foo">
		You said {bar}
	</div>
};

export default Foo;
