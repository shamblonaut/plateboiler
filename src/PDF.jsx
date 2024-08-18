import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,
  PDFDownloadLink,
} from "@react-pdf/renderer";

Font.registerHyphenationCallback((word) => [word]);

// Register a font (you'll need to provide the actual font file)
Font.register({
  family: "Times New Roman",
  fonts: [
    {
      src: "/font.ttf",
    },
    {
      src: "/font-bold.ttf",
      fontWeight: "bold",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    margin: "80px",
    backgroundColor: "#FFFFFF",
    fontFamily: "Times New Roman",
  },
  section: {
    maxWidth: 435,
  },
  large: {
    fontSize: 18,
    textAlign: "center",
  },
  largeSpaced: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  largeBold: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  largeBoldSpaced: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  center: {
    fontSize: 14,
    textAlign: "center",
  },
  centerSpaced: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  centerBold: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    textAlign: "left",
  },
  textSpaced: {
    fontSize: 14,
    marginBottom: 20,
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textRight: {
    fontSize: 14,
    textAlign: "right",
  },
  textRightBold: {
    fontSize: 14,
    textAlign: "right",
    fontWeight: "bold",
    marginTop: 20,
  },
  logo: {
    maxWidth: 435,
  },
  image: {
    marginLeft: 138,
    marginRight: 138,
    marginTop: 80,
    marginBottom: 80,
    maxWidth: 160,
    maxHeight: 160,
  },
  textBlock: {
    fontSize: 14,
    textAlign: "justify",
    marginTop: 10,
    marginBottom: 10,
  },
  list: {
    marginBottom: 20,
    maxWidth: 420,
  },
  listItem: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
  },
  listNumber: {
    marginRight: 10,
    fontSize: 14,
  },
});

// Create Document Component
const PDF = ({ studentName, projectName, subject, teacher, year }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.largeBoldSpaced}>{projectName}</Text>
        <Text style={styles.largeSpaced}>PROJECT REPORT</Text>
        <Text style={styles.centerSpaced}>Submitted by</Text>
        <Text style={styles.centerBold}>{studentName.toUpperCase()}</Text>
        <Text style={[styles.centerBold, { marginRight: 80 }]}>UID No.:</Text>
        <Text style={styles.center}>to</Text>
        <Text style={styles.center}>
          Council for the Indian School Certificate Examination (CISCE)
        </Text>
      </View>
      <View style={styles.logo}>
        <Image src="/gps.png" style={styles.image} />
      </View>
      <View style={styles.section}>
        <Text style={styles.largeBoldSpaced}>
          Department of Secondary Level
        </Text>
        <Text style={styles.large}>Greenwoods Public School</Text>
        <Text style={styles.large}>Bekal</Text>
        <Text style={styles.large}>FEBRUARY {year}</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.largeBoldSpaced}>DECLARATION</Text>
        <Text style={styles.textBlock}>
          I undersigned solemnly declare that the project report "
          <Text style={styles.textBold}>{projectName.toUpperCase()}</Text>" is
          based on my work carried out during the course of our study under the
          supervision of {teacher}. I assert the statement made and conclusions
          drawn are an outcome of my research work. I further certify that
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.listNumber}>1.</Text>
            <Text style={styles.text}>
              The work contained in the report is original and has been done by
              me under the general supervision of my supervisor.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listNumber}>2.</Text>
            <Text style={styles.text}>
              The work has not been submitted to any other institution for any
              other degree/diploma/certificate in this school.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listNumber}>3.</Text>
            <Text style={styles.text}>
              We have followed the guidelines forwarded by the board in writing
              the report.
            </Text>
          </View>
        </View>
        <Text style={styles.textRightBold}>{studentName.toUpperCase()}</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.largeBold}>GREENWOODS PUBLIC SCHOOL</Text>
        <Text style={styles.largeBoldSpaced}>BEKAL</Text>
        <Text style={styles.largeBoldSpaced}>
          DEPARTMENT OF SECONDARY LEVEL
        </Text>
      </View>
      <View style={styles.logo}>
        <Image src="/gps.png" style={styles.image} />
      </View>
      <View style={styles.section}>
        <Text style={styles.largeBoldSpaced}>CERTIFICATE</Text>
        <Text style={styles.textBlock}>
          This is to certify that{" "}
          <Text style={styles.textBold}>{studentName.toUpperCase()}</Text>, a
          student of class XII has successfully completed the research on the
          project "{projectName}" under the guidance of {teacher} during the
          year {year - 1}-{year} in partial fulfillment of {subject} project
          conducted by ISC, New Delhi.
        </Text>
      </View>
      <View
        style={[
          styles.section,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "40px",
          },
        ]}
      >
        <Text style={styles.text}>Project Coordinator:</Text>
        <Text
          style={[styles.text, { textAlign: "right", marginRight: "80px" }]}
        >
          External Examiner(s):
        </Text>
      </View>
      <View style={[styles.section, { marginTop: "40px" }]}>
        <Text style={styles.text}>Principal:</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.largeBoldSpaced}>ACKNOWLEDGEMENT</Text>
        <Text style={styles.textBlock}>
          Success and final outcome of this project required a lot of guidance
          and assistance from many people and I am extremely fortunate to have
          got this all along the completion of my project work. Whatever I have
          done is only due to such guidance and assistance and I would not
          forget to thank them.
        </Text>
        <Text style={styles.textBlock}>
          First and foremost, I take this opportunity to express my gratitude to
          our principal <Text style={styles.textBold}>Mr. Ganesh Kattayat</Text>
          , for his enthusiastic help, valuable suggestions and constant
          encouragement throughout my work. I owe my profound gratitude to our
          HM <Text style={styles.textBold}>Mrs. Sreeja V</Text> (Secondary Level
          Section) for her valuable suggestions and support.
        </Text>
        <Text style={styles.textBlock}>
          I am indebted to our project coordinator{" "}
          <Text style={styles.textBold}>{teacher}</Text>, Secondary Level
          Section, for their timely guidance and support throughout this work.
        </Text>
        <Text style={styles.textBlock}>
          I thank God almighty for all the blessings received during this
          endeavor. Last, but not the least, I thank all my friends and my
          family for the support and encouragement they have given during the
          course of this work.
        </Text>
        <Text style={styles.textRightBold}>{studentName.toUpperCase()}</Text>
      </View>
      <View style={[styles.section, { marginTop: "40px" }]}>
        <Text style={styles.text}>Date:</Text>
        <Text style={[styles.text, { marginTop: "10px" }]}>Place:</Text>
      </View>
    </Page>
  </Document>
);

export default PDF;
