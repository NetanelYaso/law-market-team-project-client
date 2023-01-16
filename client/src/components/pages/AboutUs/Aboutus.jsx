import React from "react";
import "./AboutUs.css"
import { Col, Row } from "react-bootstrap";
export default function AboutUs() {
  return (
    <>
    <h1> אודות</h1>
      <Row>
        <Col md={6} className=" imag-div1">

        </Col>
        <Col md={6} className=" p-0">
          <div className="description    ">
            <div className="d-flex  justify-content-center align-content-center  ss">

              
              <div className="div-text d-flex   p-5">
                אנו חבורת אנשים שהתאגדה יחד כאשר הגורם המאחד והחזק שלה הוא הנגשת
                שירות מקצועי אמין ברמת שירות גבוהה לכול דורש החל מעסקים קטנים
                וגדולים כאחד דרך משפחות ושותפים ועד לאדם הפרטי.<br></br>המורשת רבת השנים של העיישה למען הקהילה ולאחר בחברתנו היא רק אחת בין שלל ערכים שחרטנו על דיגלנו ואנו מקפידים לישם כל אחד ואחד מהם ללא יוצא מן הכלל 
              </div>

            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6} className=" p-text d-flex p-5">
          <div className="description    ">
            <div className="d-flex  justify-content-center align-content-center  ss">

              <div className="p-text">
              המורשת רבת השנים של המשרד יצרה את התשתית המשפטית ממנה נהנים לקוחות המשרד גם היום בעזרת מענה מקצועי מקיף, One-stop-shop, ופתרונות משפטיים המותאמים לצרכים המיוחדים שלהם בכל תחומי העשייה המשפטית:<br></br>
דיני חברות, מיזוגים ורכישות, שוק ההון, הייטק והון סיכון, קניין רוחני, בנקאות וביטוח, מימון ומיסוי, נדל"ן, ליטיגציה, הגבלים עסקיים, אנרגיה ותשתיות, איכות הסביבה, דיני עבודה, משפט מנהלי ועוד.
בעולם כל כך דינמי, מהירות התגובה קריטית. הצוות המקצועי במשרד מספק שירות רב תחומי, מקיף ובלתי מתפשר במגוון בשפות שונות ופועל בזירה המקומית והגלובלית.
אם הארגון שלכם מכוון מטרה אתם כבר בדרך הנכונה,
אנחנו כאן בשביל לאפשר לכם להגיע אליה במהירות, ביעילות ובהצלחה.
              </div>

            </div>
          </div>
        </Col>
        <Col md={6} className="img-div2 p-5  mt-5 ">

        </Col>
      </Row>
      
    </>
  );
}
