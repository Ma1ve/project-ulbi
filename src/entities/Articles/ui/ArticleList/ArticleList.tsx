import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticalListItem/ArticalListItem';
import { ArticleListItemSkeleton } from '../ArticalListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import {
    AutoSizer,
    List,
    ListRowProps,
    WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from '@/widgets/Page/Page';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text
                    size={TextSize.L}
                    title={t('Статьи не найдены')}
                />
            </div>
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                className={cls.card}
                target={target}
            />
        );
    };
    //!
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig
        ? articles.length
        : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i++) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={'str' + i}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    return (
        // <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
        //   {({ height, width, registerChild, onChildScroll, isScrolling, scrollTop }) => (
        //     //@ts-ignore
        //     <div ref={registerChild} className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        //       {virtualized ? (
        //         <List
        //           height={height ?? 700}
        //           rowCount={rowCount}
        //           rowHeight={isBig ? 700 : 330}
        //           rowRenderer={rowRender}
        //           width={width ? width - 80 : 700}
        //           autoHeight
        //           onScroll={onChildScroll}
        //           isScrolling={isScrolling}
        //           scrollTop={scrollTop}
        //         />
        //       ) : (
        //         articles.map((item) => <ArticleListItem article={item} view={view} target={target} key={item.id} className={cls.card} />)
        //       )}

        //       {isLoading && getSkeletons(view)}
        //     </div>
        //   )}
        // </WindowScroller>

        <div
            data-testid={'ArticleList'}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
