import Link from 'next/link';
import { useMemo } from 'react';
import { SearchResponse } from '../../../server/trpc/router/search';
import Card from '../../common/card/Card';
import PercentageMatchBar from '../../common/percentage-match-bar/PercentageMatchBar';

/**
 * The props used to configure the AnswerCard component.
 */
export interface AnswerCardProps {
	/**
	 * Single answer object from the search backend response.
	 */
	answer: SearchResponse['answers'][0];

	/**
	 * The search term that was queried to get the answer.
	 */
	searchTerm: string;

	/**
	 * The technology that was selected to get the answer.
	 */
	technology: string;
}

/**
 * Component used to display one answer from the backend wrapped inside a Card component.
 */
const AnswerCard = ({ answer, searchTerm, technology }: AnswerCardProps) => {
	const detailsHref = useMemo(() => {
		let url = `/search/details/${answer.answer_id}`;
		url += `?q=${encodeURIComponent(searchTerm)}`;
		url += `&t=${encodeURIComponent(technology)}`;
		return url;
	}, [answer.answer_id, searchTerm, technology]);

	return (
		<Card>
			<Link href={detailsHref} passHref>
				<a className="text-2xl font-semibold underline">
					{answer.parameters[0] ?? 'Parameter'}
				</a>
			</Link>

			<div className="flex flex-wrap items-center justify-center gap-2 min-[400px]:grid min-[400px]:grid-cols-12">
				<div className="min-[400px]:col-span-9">
					<p className="break-all">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Mollitia beatae obcaecati omnis ut at quasi id
						incidunt nam sit minus?
					</p>
				</div>

				<div className="col-span-3 flex flex-col flex-wrap gap-2 text-[#6f6f6f]">
					<span className="self-end text-center">xx matches</span>

					<div className="flex flex-1 flex-wrap-reverse items-center justify-center gap-2 sm:flex-nowrap">
						<span className="self-end">
							{(answer.similarity_score * 100).toFixed(2)}%
						</span>

						<PercentageMatchBar
							percentage={answer.similarity_score}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default AnswerCard;