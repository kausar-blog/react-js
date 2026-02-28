import Child from './Child';

function Parent() {
  const MyParent = () => {
    alert('You Have Clicked The Button');
  };

  return (
    <>
      <h3>Parent Components</h3>
      <Child MyFun={MyParent} />
    </>
  );
}

export default Parent;
