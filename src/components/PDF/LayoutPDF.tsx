import React from 'react';
import { Page, Document, StyleSheet, Font, Text, View } from '@react-pdf/renderer';

Font.register({
    family: 'Times New Roman',
    fonts: [
        { src: '/fonts/TimesNewerRoman-Regular.otf', fontWeight: 400, fontStyle: 'normal' }, // Regular
        { src: '/fonts/TimesNewerRoman-Bold.otf', fontWeight: 700, fontStyle: 'normal' }, // Bold
        { src: '/fonts/TimesNewerRoman-Italic.otf', fontWeight: 400, fontStyle: 'italic' }, // Regular Italic
        { src: '/fonts/TimesNewerRoman-BoldItalic.otf', fontWeight: 700, fontStyle: 'italic' }, // Bold Italic
    ]
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        padding: 72,
        paddingBottom: 72 + 14,
        fontFamily: 'Times New Roman',
        fontSize: 12,
        lineHeight: 1.5,
        position: 'relative',
    },


    pageNumber: {
        position: 'absolute',
        fontSize: 14,
        top: 792 - 14,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

interface LayoutPDFProps {
    children: React.ReactNode;
}

const LayoutPDF: React.FC<LayoutPDFProps> = ({ children }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {children}
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />

            </Page>
        </Document>
    );
}

export default LayoutPDF;