import SearchIcon from '@mui/icons-material/Search';
import { SelectChangeEvent } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import Button from '../components/common/button/Button';
import Dropdown from '../components/form/dropdown/Dropdown';
import TextInput from '../components/form/text-input/TextInput';
import { SearchQuery } from '../lib/SearchQuery';
import styles from '../styles/HomePage.module.scss';
import { trpc } from '../utils/trpc';

/**
 * Component display the homepage of the application.
 */
const HomePage: NextPage = () => {
	const router = useRouter();
	const { data } = trpc.technologies.dropdown.useQuery();
	const [searchText, setSearchText] = useState('');
	const [technology, setTechnology] = useState('');

	/**
	 * Callback when the form is submitted.
	 */
	const onFormSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const trimmedSearchText = searchText.trim();
			const trimmedTechnology = technology.trim();
			if (!trimmedSearchText) return;
			if (!trimmedTechnology) return;
			const searchQuery = new SearchQuery(
				trimmedSearchText,
				trimmedTechnology,
			);
			router.push(searchQuery.getUrl());
		},
		[router, searchText, technology],
	);

	/**
	 * Callback when a text value is typed.
	 */
	const onSearchTextChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setSearchText(e.target.value);
		},
		[],
	);

	/**
	 * Callback when a new techology is selected.
	 */
	const onTechnologyChange = useCallback((e: SelectChangeEvent<string>) => {
		setTechnology(e.target.value);
	}, []);

	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<div className={styles.logo__wrapper}>
					<Image
						src="/dopamine.svg"
						height={128}
						width={384}
						alt="Dopamine Logo"
					/>
				</div>

				<main className={styles.main__container}>
					<section>
						<form
							onSubmit={onFormSubmit}
							className={styles.form__container}
						>
							<div className={styles.form__row}>
								<TextInput
									name="search"
									onChange={onSearchTextChange}
									placeholder="Search..."
									required
									type="text"
								/>
							</div>

							<div className={styles.form__row}>
								<div className={styles.dropdown__container}>
									<Dropdown
										label="Technology"
										name="technology"
										onChange={onTechnologyChange}
										options={data}
										required
									/>
								</div>

								<Button type="submit">
									<SearchIcon />
								</Button>
							</div>
						</form>
					</section>
				</main>
			</div>
		</>
	);
};

export default HomePage;
