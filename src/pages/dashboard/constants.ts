import { localize } from '@deriv-com/translations';

export type TSidebarItem = {
    label: string;
    content: { data: string; faq_id?: string }[];
    link: boolean;
};

export const SIDEBAR_INTRO = (): TSidebarItem[] => [
    {
        label: localize('Welcome to Emiisdtrader! '),
        content: [
            {
                data: localize('Your Gateway to Smarter, Automated Profits! I want us to be rich!'),
            },
        ],
        link: false,
    },
    {
        label: localize('Guide'),
        content: [{ data: localize('Deriv Bot - your automated trading partner') }],
        link: true,
    },
];

