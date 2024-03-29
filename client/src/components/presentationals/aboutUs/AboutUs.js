import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {RiPagesLine} from 'react-icons/ri';
import AboutUsStyled from './styled';

const AboutUs = () => {
	let aboutUs = [
		{
			fullName: 'Bruno Paveglio',
			image: 'https://avatars.githubusercontent.com/u/75403439?v=4',
			github: 'https://github.com/Pavegliobruno',
			cv: 'https://drive.google.com/drive/folders/1ltpZjk-YCHUSK4JWtLGcPSjjm98nLtOa?usp=sharing'
		},
		{
			fullName: 'Alonso Diaz',
			image: 'https://avatars.githubusercontent.com/u/6856229?v=4',
			linkedin: 'https://www.linkedin.com/in/alonsojesusdiaz/   ',
			github: 'https://github.com/Alonxx/',
			cv: 'https://alonsodiaz.dev/'
		},
		{
			fullName: 'Facundo Cordoba',
			image: 'https://avatars.githubusercontent.com/u/74992465?v=4',
			linkedin: 'https://www.linkedin.com/in/facundocordobaperez/',
			github: 'https://github.com/Facundo2210',
			cv: 'https://res.cloudinary.com/facu/image/upload/v1621971466/Github/Facundo_Nicolas_Cordoba_Perez_nn02qy.jpg'
		},
		{
			fullName: 'José Garrera',
			image: 'https://avatars.githubusercontent.com/u/12253412?v=4',
			linkedin: 'https://www.linkedin.com/in/josegarrera/',
			github: 'https://github.com/josegarrera',
			cv: ''
		},
		{
			fullName: 'Pedro Contreras',
			image: 'https://avatars.githubusercontent.com/u/66505351?v=4',
			linkedin: 'https://www.linkedin.com/in/pedrocontreras-js/',
			github: 'https://github.com/pedro030',
			cv: 'https://drive.google.com/file/d/13PsUVdphif23kDXlNvQYb6cSBYMgqCSs/view'
		},
		{
			fullName: 'Camila Álvarez',
			image: 'https://avatars.githubusercontent.com/u/73317663?v=4',
			linkedin: 'https://www.linkedin.com/in/camila-alexandra-alvarez/',
			github: 'https://github.com/C0A0A',
			cv: 'https://drive.google.com/file/d/1ngvDeE9eFkx9RL_Xkr1Pyp7e9kXvPNvH/view?usp=sharing'
		},
		{
			fullName: 'Gregorio Martocci',
			image: 'https://avatars.githubusercontent.com/u/63933368?v=4',
			linkedin: 'https://www.linkedin.com/in/gregorio-martocci-b082a71a9/',
			github: 'https://github.com/gregoriomartocci',
			cv: 'https://gregorio-martocci.vercel.app/'
		}
	];

	return (
		<AboutUsStyled>
			{aboutUs.map((el, i) => (
				<div className='card' key={i + el + 'div'}>
					<div className='imageDiv' key={i + el + 'div2'}>
						<img
							className='image'
							src={el.image}
							alt='profile pic'
							key={i + el + 'img'}
						/>
					</div>
					<div className='nameDiv' key={i + el + 'div3'}>
						{el.fullName}
					</div>
					<div className='iconsDiv' key={i + el + 'div4'}>
						{el.linkedin ? (
							<a
								target='_blank'
								href={el.linkedin}
								rel='noopener noreferrer'
								key={i + el + 'a'}
							>
								<AiFillLinkedin className='icon' key={i + el + 'icon'} />
							</a>
						) : null}

						{el.github ? (
							<a
								target='_blank'
								href={el.github}
								rel='noopener noreferrer'
								key={i + el + 'a2'}
							>
								<AiFillGithub className='icon' key={i + el + 'icon2'} />
							</a>
						) : null}

						{el.cv ? (
							<a
								target='_blank'
								href={el.cv}
								rel='noopener noreferrer'
								key={i + el + 'a3'}
							>
								<RiPagesLine className='icon' key={i + el + 'icon3'} />
							</a>
						) : null}
					</div>
				</div>
			))}
		</AboutUsStyled>
	);
};

export default AboutUs;
