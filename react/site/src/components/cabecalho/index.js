
import { Container } from './styled'


export default function Index() {
    return (
        <Container>
            <div class="reader-right-box">
                <div class="box-user"> 
                    <div class="user-image">
                        <img src="https://s2.glbimg.com/p5CZKmTfULiUGx78EQhU0_yBRwI=/e.glbimg.com/og/ed/f/original/2019/04/02/ursus_maritimus_us_fish.jpg" alt="" />
                        <div class="absolute">3</div>
                    </div>
                    <div class="user-name"> Olá, <b>Isabella Vital</b> </div>
                </div>
                
                <div class="box-image">
                    <div class="refresh-button"> <button> <img src="/assets/images/refresh.svg" alt = "" />  </button> </div>
                    <div class="left-button"> <button> <img src="/assets/images/log-out.svg" alt = "" />  </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header" />
        </Container>
    )
}
