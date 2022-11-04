import { NextPage } from 'next';
import Head from 'next/head';
import PercentageMatchBar from '../components/common/percentage-match-bar/PercentageMatchBar';
import Step from '../components/pages/help/step/Step';
import styles from '../styles/HelpPage.module.scss';

/**
 * Component representing the page on the `/help` endpoint.
 */
const HelpPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<h1 className={styles.title}>Get Help</h1>

				<main>
					<section className={styles.steps__section}>
						<h2 className={styles.steps__title}>
							Steps to ask a question
						</h2>

						<div className={styles.steps__container}>
							<Step stepIndex={1}>
								Type your question in the search box.
							</Step>

							<Step stepIndex={2}>
								Refine your search by clicking on the
								"Technologies" menu and selecting a specific
								technology.
							</Step>

							<Step stepIndex={3}>
								Press ENTER on your keyboard or click on the
								search button to ask your question.
							</Step>

							<Step stepIndex={4}>
								Navigate the list of results to find the
								parameter that will fix your issue.
							</Step>
						</div>
					</section>
				</main>

				<section className={styles.additional__notes__section}>
					<h2 className={styles.additional__notes__title}>
						Additional notes
					</h2>

					<div className={styles.additional__notes__container}>
						<p>
							We could include a note about the algorithm we used
							to determine which results to consider and how we
							parse the data, where we got the data, etc.
						</p>

						<div className={styles.similarity__score__container}>
							<div className={styles.match__bar__container}>
								<span className={styles.percentage__container}>86.89%</span>
								<PercentageMatchBar percentage={0.65} />
							</div>
							<p>
								indicates the score of the result in correlation
								with the user’s question, as determined by the
								Natural Language Processing (NLP) algorithm.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default HelpPage;
