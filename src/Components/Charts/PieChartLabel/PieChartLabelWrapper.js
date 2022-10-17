import Symbols from "../Symbols/Symbols";
import {StyledWrapper} from "../ChartWrapper";
export default function PieChartLabelWrapper(props)
{
    return(<StyledWrapper>
        <Symbols name={Object.keys(props.label)[0]} background="#1114b0"/>
        <Symbols name={Object.keys(props.label)[1]} background="#00995c"/>
        <Symbols name={Object.keys(props.label)[2]} background="#ff4d88 "/>
        </StyledWrapper>)
}