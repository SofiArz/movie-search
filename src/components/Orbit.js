import { StreamingImg } from './StreamingImg'

export const Orbit = () => {

    return (
        <div id='circle-orbit-container'>

            <div id='inner-orbit'>
                <StreamingImg
                    source='/netflix.png'
                    name='netflix-icon'
                    style={{ position: 'absolute', top: '506px', left: '54px' }}
                />
                <StreamingImg
                    source='/amazon.png'
                    name='amazon-icon'
                    style={{ position: 'absolute', top: '506px', right: '54px' }}
                />
                <StreamingImg
                    source='/hbo.png'
                    name='hbo-icon'
                    style={{ position: 'absolute', bottom: '521px', left: '65px' }}
                />
                <StreamingImg
                    source='/hulu.png'
                    name='hulu-icon'
                    style={{ position: 'absolute', bottom: '521px', right: '65px' }}
                />
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
                    style={{ position: 'absolute', bottom: '-20px', left: '500px' }} />
                <StreamingImg
                    source='/apple.png'
                    name='apple-icon'
                    style={{ position: 'absolute', top: '-20px', right: '500px' }} />
                <StreamingImg
                    source='/starz.png'
                    name='starz-icon'
                    style={{ position: 'absolute', top: '786px', left: '90px', objectFit: 'contain', }} />
                <StreamingImg
                    source='/showtime.png'
                    name='showtime-icon'
                    style={{ position: 'absolute', top: '786px', right: '90px' }} />
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
                    style={{ position: 'absolute', top: '413px', left: '13px', height: '60px', width: '60px', objectFit: 'contain' }} />
                <StreamingImg
                    source='/crave.png'
                    name='crave-icon'
                    style={{ position: 'absolute', top: '413px', right: '13px', height: '60px', width: '60px' }} />
                <StreamingImg
                    source='/bbc.png'
                    name='bbc-icon'
                    style={{ position: 'absolute', bottom: '3px', left: '420px', height: '60px', width: '60px' }} />
                <StreamingImg
                    source='/all4.png'
                    name='all4-icon'
                    style={{ position: 'absolute', top: '3px', right: '420px', height: '60px', width: '60px' }} />
            </div>

        </div>

    )
}
