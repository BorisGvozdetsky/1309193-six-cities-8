import Loader from 'react-loader-spinner';

function LoaderSpinner(): JSX.Element {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Loader type='Rings' color='#4481c3' height={100} width={100}/>
    </div>
  );
}

export default LoaderSpinner;
