import { useSelector } from 'react-redux';
import styles from './styledHeader.module.scss';
import { TopBar } from '../../../../components/generalComponents/TopBar';
import { BigButton, LittleButton } from '../../../../components/generalComponents/buttons';

export function Header() {
	const imagesTopBarWhite = useSelector(
		state => state.dataTopBar.dataSvgTopBarWhite
	);
	return (
		<div className={styles.wrapper_header}>
			<TopBar
				logo={imagesTopBarWhite.logo}
				cart={imagesTopBarWhite.cart}
				burger={imagesTopBarWhite.burger}
			/>
			<div className={styles.content_header}>
				<h2>STREETSTER NATHAN</h2>
				<h1>
					Удобный и быстрый <br />
					Твой идеал для покорения города
				</h1>
				<LittleButton text='УЗНАТЬ БОЛЬШЕ' />
			</div>
		</div>
	);
}
