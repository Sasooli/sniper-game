import React, {ChangeEvent} from "react";
import Slider from '@material-ui/core/Slider';

type ZoomControlsProps = {
    zoomLevel : number;
    setZoomLevel : React.Dispatch<React.SetStateAction<number>>;
}

function ZoomControls({zoomLevel, setZoomLevel} : ZoomControlsProps) {

    const handleChange = (event: ChangeEvent<{}>, value: number | number[]) => {
        setZoomLevel(value as number);
    }

    return (
        <div>
            <Slider
                min={0.2}
                step={0.1}
                max={2}
                value={zoomLevel}
                onChange={handleChange}
            />
        </div>
    )
}

export default ZoomControls;