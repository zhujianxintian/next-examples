import React from 'react';
import classNames from 'classnames/dedupe';

// classnames/dedupe 可以消除重复的类名

interface ParagraphProps {
    className?: string;
    children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => {
    const classes = {
        container: classNames(className),
    };

    return <p className={classes.container}>{children}</p>;
};

export default Paragraph;
