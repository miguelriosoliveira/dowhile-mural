import { VscGithubInverted } from 'react-icons/vsc';

import styles from './styles.module.scss';

import { useAuth } from 'hooks/useAuth';

export function LoginBox() {
	const { user, signInUrl } = useAuth();

	console.log({ user });

	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua mensagem</strong>

			<a href={signInUrl} className={styles.signInWithGithub}>
				<VscGithubInverted size="24" />
				Entrar com GitHub
			</a>
		</div>
	);
}
