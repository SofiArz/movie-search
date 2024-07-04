import { StreamingImg } from './StreamingImg'

export const Orbit = () => {

    return (
        <div id='circle-orbit-container'>

            <div id='inner-orbit'>
                <StreamingImg
                    source='/img/netflix.avif'
                    name='netflix-icon'
                    style={{ position: 'absolute', top: '506px', left: '54px' }}
                />
                <StreamingImg
                    source='/img/amazon.avif'
                    name='amazon-icon'
                    style={{ position: 'absolute', top: '506px', right: '54px' }}
                />
                <StreamingImg
                    source='/img/hbo.avif'
                    name='hbo-icon'
                    style={{ position: 'absolute', bottom: '521px', left: '65px' }}
                />
                <StreamingImg
                    source='/img/hulu.avif'
                    name='hulu-icon'
                    style={{ position: 'absolute', bottom: '521px', right: '65px' }}
                />
            </div>

            <div id='middle-orbit'>
                <StreamingImg
                    source='/img/disney.avif'
                    name='disney-icon'
                    style={{ position: 'absolute', top: '413px', left: '-14px' }} />
                <StreamingImg
                    source='/img/paramount.avif'
                    name='paramount-icon'
                    style={{ position: 'absolute', top: '413px', right: '-14px' }} />
                <StreamingImg
                    source='/img/peacock.avif'
                    name='peacock-icon'
                    style={{ position: 'absolute', bottom: '-20px', left: '500px' }} />
                <StreamingImg
                    source='/img/apple.avif'
                    name='apple-icon'
                    style={{ position: 'absolute', top: '-20px', right: '500px' }} />
                <StreamingImg
                    source='/img/starz.avif'
                    name='starz-icon'
                    style={{ position: 'absolute', top: '786px', left: '90px', objectFit: 'contain', }} />
                <StreamingImg
                    source='/img/showtime.avif'
                    name='showtime-icon'
                    style={{ position: 'absolute', top: '786px', right: '90px' }} />
                <StreamingImg
                    source='/img/mubi.avif'
                    name='mubi-icon'
                    style={{ position: 'absolute', bottom: '838px', left: '129px' }} />
                <StreamingImg
                    source='/img/stan.avif'
                    name='stan-icon'
                    style={{ position: 'absolute', bottom: '838px', right: '129px' }} />
            </div>

            <div id='outer-orbit'>
                <StreamingImg
                    source='/img/now.avif'
                    name='now-icon'
                    style={{ position: 'absolute', top: '413px', left: '13px', height: '60px', width: '60px', objectFit: 'contain' }} />
                <StreamingImg
                    source='/img/crave.avif'
                    name='crave-icon'
                    style={{ position: 'absolute', top: '413px', right: '13px', height: '60px', width: '60px' }} />
                <StreamingImg
                    source='/img/bbc.avif'
                    name='bbc-icon'
                    style={{ position: 'absolute', bottom: '3px', left: '420px', height: '60px', width: '60px' }} />
                <StreamingImg
                    source='/img/all4.avif'
                    name='all4-icon'
                    style={{ position: 'absolute', top: '3px', right: '420px', height: '60px', width: '60px' }} />
            </div>

        </div>

    )
}
