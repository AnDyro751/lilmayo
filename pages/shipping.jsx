import MainLayout from "../src/components/layouts/main";
const ShippingPage = () => {
    return (
        <MainLayout
            seo={{
                title: 'Ordering Terms'
            }}
        >
            <div className="flex justify-center" >
                <div className="w-10/12 md:w-8/12 space-y-4">
                    <h1 className="text-center text-4xl font-medium mb-12 mt-8" >
                        Ordering Terms
                    </h1>
                    <p>
                        Questions or concerns? Please do not hesitate to contact us
                        at <a href="mailto:info@lilmayoshop.com">info@lilmayoshop.com</a> and we'll get back to you as soon as possible. Our
                        business hours are Monday-Friday 10:00am-6pm PST.
                    </p>
                    <p>
                        Please review the following basic terms that govern your use of, and purchase of,
                        products from LILMAYOSHOP.COM Please note that your use of
                        LILMAYOSHOP.COM constitutes your agreement to follow and be bound by those
                        terms.
                    </p>
                    <p>
                        Once an order is placed there is no promise that we will be able to update
                        your order. Orders are processed once they are placed. Please be sure to use the
                        correct shipping info and select the correct product before completing your
                        order. If an order is lost due to an invalid shipping address we will not be able to
                        refund that order.
                    </p>
                    <p>
                        Prices, Shipping & Delivery Time
                    </p>
                    <p>
                        During our Black Friday sale please allow us 3-10 business days for your package
                        to be processed and shipped. We will do our best to get as many packages
                        shipped per day but due to high order volume there may be slight delays.
                    </p>
                    <p>
                        Purchased items will be shipped from México within 2-5 business days of the
                        order, although most will be shipped within 1 to 3. Please allow up to 1 weeks from
                        ship date for your delivery to arrive (USA SHIPPING ONLY). If you still have not
                        received your purchase after 1-2 week of your order delivering (USA), please
                        notify info@lilmayoshop.com and provide your order number.
                        America
                    </p>
                    <p>
                        We now offer $80.00USD flat rate shipping All America orders are shipped via
                        FedEx Priority & First Class Standard delivery time is 2-3 business days from date
                        shipped, but may take longer. Most America orders are received within 1 week of
                        ship date.
                    </p>
                    Europe
                    We now offer flat rate international shipping of $80.00 USD and currency
                    conversion through Global-e to 61 countries offering shopping in your local  
                    currency. Also for certain countries you can now pay duties and taxes at checkout
                    so there is no hidden fees when the package arrives. We even cover duties and
                    taxes for certain countries! .
                    LIL MAYO SAS DE CV or LILMAYOSHOP.COM is not responsible for international
                    shipping delays, such as customs delays and is not responsible for any customs
                    duties or taxes fees (if the package is shipped back because the customs payment
                    was not paid we are not able to refund your order). We are not responsible for any
                    lost, stolen, or damaged shipments. The buyer assumes all responsibilities of
                    claims made with the shipping carrier and all duties/fees incurred on the shipment.
                    Please contact info@lilmayoshop.com if you have any questions.
                    <p>
                        <strong>
                            AUSTRIA, POLAND & UAE
                        </strong>
                    </p>
                    We now offer flat rate FOR Austria, Poland and UAE shipping of $149.00 USD .
                    Where is my order?
                    You can track your order directly on FEDEX.COM
                    What if my order never arrives or is stolen?
                    If you have problems receiving your package please contact
                    <a href="mailto:info@lilmayoshop.com">info@lilmayoshop.com</a>
                    <p><strong>
                        Purchase for Personal Use Only
                    </strong></p>
                    You may purchase products only for personal use and not for resale. By placing
                    your order, you certify that you are purchasing products for personal use only and
                    not for resale. We reserve the right to refuse orders for any reason without
                    explanation.
                </div>
            </div>
        </MainLayout>
    )
};

export default ShippingPage
