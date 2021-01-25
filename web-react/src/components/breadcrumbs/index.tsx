import React from 'react';
import { Link } from 'react-router-dom';
import styles from './breadcrumbs.module.css';

type BreadCrumbItemProps = {
    link: string;
    label: string;
    isActive: boolean;
}

type BreadcrumbsProps = {
    items: BreadCrumbItemProps[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (<div>
    <ul className={styles.breadcrumbs}>
        {items.map((it, index) => (<li key={`breadcrumb-${index}`} className={styles.breadcrumbItem}>
            {it.isActive
                ? <span className={styles.breadcrumbItemActive}>{it.label}</span>
                : <Link to={it.link}>{it.label}</Link>}
        </li>))}
    </ul>
</div>);

export default Breadcrumbs;
