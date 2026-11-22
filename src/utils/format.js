const nf = new Intl.NumberFormat("en-US");

/** 48250 -> "Rs. 48,250" */
export function rs(amount) {
  return `Rs. ${nf.format(Math.abs(amount))}`;
}

/** Signed money for lists: -500 -> "−Rs. 500", 18400 -> "+Rs. 18,400" */
export function signedRs(amount) {
  return `${amount < 0 ? "−" : "+"}${rs(amount)}`;
}
