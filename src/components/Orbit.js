import { StreamingImg } from './StreamingImg'

export const Orbit = () => {
    return (
        <div id='circle-orbit-container'>

            <div id='inner-orbit'>
                <StreamingImg
                    source='/netflix.png'
                    name='netflix-icon'
                    style={{ position: 'absolute', top: '506px', left: '54px' }} />
                <StreamingImg
                    source='/amazon.png'
                    name='amazon-icon'
                    style={{ position: 'absolute', top: '506px', right: '54px' }} />
                <StreamingImg
                    source='/hbo.png'
                    name='hbo-icon'
                    style={{ position: 'absolute', bottom: '521px', left: '65px' }} />
                <StreamingImg
                    source='/hulu.png'
                    name='hulu-icon'
                    style={{ position: 'absolute', bottom: '521px', right: '65px' }} />
            </div>

            <div id='middle-orbit'>
                <StreamingImg
                    source='/disney.png'
                    name='disney-icon'
                    style={{ position: 'absolute', top: '413px', left: '-14px' }} />
                <StreamingImg
                    source='/paramount.png'
                    name='paramount-icon'
                    style={{ position: 'absolute', top: '413px', right: '-14px' }} />
                <StreamingImg
                    source='/peacock.png'
                    name='peacock-icon'
                    style={{ position: 'absolute', bottom: '-20px', left: '500px', border: '2px rgba(74, 67, 127, 0.4745098039) solid' }} />
                <StreamingImg
                    source='/apple.png'
                    name='apple-icon'
                    style={{ position: 'absolute', top: '-20px', right: '500px', backgroundColor: '#FFF' }} />
                <StreamingImg
                    source='/starz.png'
                    name='starz-icon'
                    style={{ position: 'absolute', top: '786px', left: '90px', objectFit: 'contain', backgroundColor: '#919b0080' }} />
                <StreamingImg
                    source='/showtime.png'
                    name='showtime-icon'
                    style={{ position: 'absolute', top: '786px', right: '90px', objectFit: 'contain', backgroundColor: '#FFF' }} />
                <StreamingImg
                    source='/mubi.png'
                    name='mubi-icon'
                    style={{ position: 'absolute', bottom: '838px', left: '129px' }} />
                <StreamingImg
                    source='/stan.png'
                    name='stan-icon'
                    style={{ position: 'absolute', bottom: '838px', right: '129px' }} />
            </div>

            <div id='outer-orbit'>
                <StreamingImg
                    source='/now.png'
                    name='now-icon'
                    style={{ position: 'absolute', top: '413px', left: '24px', objectFit: 'contain', border: '2px solid rgb(37 128 193 / 45%)' }} />
                <StreamingImg
                    source='/crave.png'
                    name='crave-icon'
                    style={{ position: 'absolute', top: '413px', right: '24px' }} />
                <StreamingImg
                    source='/bbc.png'
                    name='bbc-icon'
                    style={{ position: 'absolute', bottom: '3px', left: '500px', border: '2px rgba(74, 67, 127, 0.4745098039) solid' }} />
                <StreamingImg
                    source='/all4.png'
                    name='all4-icon'
                    style={{ position: 'absolute', top: '3px', right: '500px' }} />
            </div>

        </div>

    )
}
