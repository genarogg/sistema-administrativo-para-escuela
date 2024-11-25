import React from 'react';
import { Image, StyleSheet } from '@react-pdf/renderer';

interface ImgProps {
    src: string;
    alt?: string;
    style?: any;
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 'auto',
        marginBottom: 14,
    }
});

const Img: React.FC<ImgProps> = ({ src, alt, style }) => {
    return <Image src={src} style={[styles.image, style]} />;
}

export default Img;