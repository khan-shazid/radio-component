import React, {useState} from 'react';

import styles from './style.module.css';

import RADIO from '../../assets/radio.png';
import { Radio } from '../Radio/radio';
import Header from '../StationHeader/station-header';
import Footer from '../StationFooter/station-footer';
import { StationModel } from '../../models';

interface StationProps {
    stations: StationModel[]
}

const Station = ({ stations }: StationProps): JSX.Element => {
    const [flag, setFlag] = useState<boolean>(false);

    const [selectedStation, setSelectedStation] = useState<StationModel | undefined>(undefined);

    const handleSelection = (station: StationModel) => {
        setSelectedStation(station);
    }

    return (
        <div className={styles.stationContainer}>
            <Header/>
            <ul className={styles.accordionList}>
            {
                stations.map((station) => {
                    return (<Radio item={station} isSelected={selectedStation?.id === station.id} handleSelection={handleSelection} key={station.id}/>)
                })
            }
            </ul>
            <Footer name={selectedStation?.name}/>
        </div>
    );
};

export default Station;

// export default CSSModules(Station, styles, {allowMultiple: true} )
