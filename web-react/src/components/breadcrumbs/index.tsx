import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.css';

type BreadCrumbItemProps = {
    link: string;
    label: string;
    isActive: boolean;
}

type BreadcrumbsProps = {
    items: BreadCrumbItemProps[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (<div>
    <ul className="breadcrumbs">
        {items.map((it, index) => (<li key={`breadcrumb-${index}`} className="breadcrumbItem">
            {it.isActive
                ? <span className="breadcrumbItem--active">{it.label}</span>
                : <Link to={it.link}>{it.label}</Link>}
        </li>))}
    </ul>
</div>);

export default Breadcrumbs;
