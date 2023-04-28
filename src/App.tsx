import {Header} from "./blocks/header";
import {Home} from "./blocks/home";
import ReactFullpage from '@fullpage/react-fullpage';

function App() {

    return (
        <>
            <Header/>
            <ReactFullpage
                licenseKey={"gplv3-license"}
                scrollingSpeed={700}
                credits={{enabled: false}}
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Home/>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    )
}

export default App
