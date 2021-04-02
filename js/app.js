import * as Tone from 'tone'
import css from '../css/index.scss'
import isMobile from 'is-mobile'

const synth = new Tone.Synth().toDestination();
const now = Tone.now()

window.play_tone = () => synth.triggerAttack("C4", now)
window.stop_tone = () => synth.triggerRelease(now)


function ms_to_s(ms) { return ms * 0.001 }


window.play_dit = (delay_units, unit_ms) => {
    const unit = ms_to_s(unit_ms)
    const duration = 1 * unit
    const start =  Tone.now() + (delay_units * unit)
    synth.triggerAttackRelease("C4", duration, start)
}


window.play_dah = (delay_units, unit_ms) => {
    const unit = ms_to_s(unit_ms)
    const duration = 3 * unit
    const start =  Tone.now() + (delay_units * unit)
    synth.triggerAttackRelease("C4", duration, start)
}

window.is_mobile = () => {
    return isMobile()
}
