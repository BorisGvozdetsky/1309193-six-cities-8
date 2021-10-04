import PageMain from '../page-main/page-main';

type AppScreenProps = {
  placeCount: number,
  offerCount: number,
}

function App({placeCount, offerCount}: AppScreenProps): JSX.Element {
  return (
    <PageMain placeCount={placeCount} offerCount={offerCount}/>
  );
}

export default App;
