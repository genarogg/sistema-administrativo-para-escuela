import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

interface TextProps {
    children: React.ReactNode;
    style?: any;
}

const styles = StyleSheet.create({
    p: {
        fontSize: 12,
        marginBottom: 14,
        textAlign: 'justify',
        lineHeight: 1.5,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        // marginTop: 10,
        textAlign: 'center',
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    h4: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
        textAlign: 'center',
    },
    h5: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
    },
    h6: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 0,
        textAlign: 'center',
    },
    strong: {
        fontWeight: 'bold',
    },
    em: {
        fontStyle: 'italic',
    },
    u: {
        textDecoration: 'underline',
    },
    small: {
        fontSize: 10,
    },
    blockquote: {
        marginLeft: 20,
        marginRight: 20,
        fontStyle: 'italic',
        borderLeft: '4px solid #ccc',
        paddingLeft: 10,
    },
    mark: {
        backgroundColor: 'yellow'
    }
});

const P: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.p, style]}>{children}</Text>;
};

const H1: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.h1, style]}>{children}</Text>;
};

const H2: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.h2, style]}>{children}</Text>;
};

const H3: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.h3, style]}>{children}</Text>;
};

const H4: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.h4, style]}>{children}</Text>;
};

const H5: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.h5, style]}>{children}</Text>;
};

const H6: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.h6, style]}>{children}</Text>;
};

const Strong: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.strong, style]}>{children}</Text>;
};

const Em: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.em, style]}>{children}</Text>;
};

const U: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.u, style]}>{children}</Text>;
};

const Small: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.small, style]}>{children}</Text>;
};

const Blockquote: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.blockquote, style]}>{children}</Text>;
};

const Mark: React.FC<TextProps> = ({ children, style }) => {
    return <Text style={[styles.mark, style]}>{children}</Text>;
};

export { P, H1, H2, H3, H4, H5, H6, Strong, Em, U, Small, Blockquote, Mark };