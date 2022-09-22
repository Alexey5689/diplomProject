import './NewVideo.css';
import ReactPlayer from 'react-player';
export default function NewVideoList(){
    return(
        <>
            <div className='NewVideoContainer'>
                <div className='Catalog'>
                    <div className='NameCatalog'>Новинки</div>
                </div>
                <div className='VideoConten'>
                    <div className='VideoContentLine'>
                        <div className='VideoPlayer'>
                            <ReactPlayer
                                height='90%'
                                width='100%'
                                url={'https://www.youtube.com/watch?v=6S-NJCLOnJ0'}
                                playing={true}
                                controls='false'
                                
                            />
                        </div>
                    </div>
                    <div className='Line'></div>
                    <div className='VideoContentLine'>

                    </div>
                </div>
            </div>

        </>
    );
}