const cardEl = document.querySelector('.card');

/* Array findLast() */
const ids = ['3427', '3428', '3429'];
const titleId = ids.findLast((x) => x % 2 !== 0);

const cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.textContent = '#' + titleId;

/* Array findLastIndex() */
const dummyTitles = ['Equil', 'Equili', 'Equilibrium'];
const title = dummyTitles[dummyTitles.findLastIndex((x) => x.length > 5)];

const cardTitleEl = cardEl.querySelector('.card__title a');
cardTitleEl.prepend(title + '\xa0');

/* Array toReversed() */
const dummyDescription = [
	'calm',
	'and',
	'balance',
	'promotes',
	'collections',
	'Equilibrium',
	'Our',
];
const description = dummyDescription.toReversed().join(' ') + '.';

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = description;

/* Array toSorted() */
const dummyImageSizes = [33, 28, 24, 20];
const authorImageSizes = dummyImageSizes.toSorted();

const cardAuthorImageEl = cardEl.querySelector('.card__author-img');
cardAuthorImageEl.width = authorImageSizes[3];
cardAuthorImageEl.height = authorImageSizes[3];

/* Array toSpliced() */
const dummyAuthorNames = ['Jules Wyvern', 'Anna'];
const authorName = dummyAuthorNames.toSpliced(1, 1);

const cardAuthorNameEl = cardEl.querySelector('.card__author-desc a');
cardAuthorNameEl.textContent = authorName;
