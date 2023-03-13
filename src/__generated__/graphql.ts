/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: any;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ChallangeVm = {
  __typename?: 'ChallangeVM';
  challangename?: Maybe<Scalars['String']>;
  challangetypeid?: Maybe<Scalars['Long']>;
  cstat?: Maybe<Scalars['String']>;
  endtime?: Maybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  modum_public_Challangelineweights?: Maybe<Array<ChallangelineweightVm>>;
  modum_public_Challangetype?: Maybe<Modum_Public_Challangetype>;
  modum_public_CstatNavigation?: Maybe<Modum_Public_Challangestat>;
  starttime?: Maybe<Scalars['DateTime']>;
};

export type ChallangelineweightVm = {
  __typename?: 'ChallangelineweightVM';
  imageurl?: Maybe<Scalars['String']>;
  muser: Scalars['String'];
  totallostweight?: Maybe<Scalars['Float']>;
  userdesc?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['Long']>;
};

export type DateOperationFilterInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
  ngt?: InputMaybe<Scalars['Date']>;
  ngte?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nlt?: InputMaybe<Scalars['Date']>;
  nlte?: InputMaybe<Scalars['Date']>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ListFilterInputTypeOfModum_Public_ActivityjoineduserFilterInput = {
  all?: InputMaybe<Modum_Public_ActivityjoineduserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_ActivityjoineduserFilterInput>;
  some?: InputMaybe<Modum_Public_ActivityjoineduserFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_AnswerFilterInput = {
  all?: InputMaybe<Modum_Public_AnswerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_AnswerFilterInput>;
  some?: InputMaybe<Modum_Public_AnswerFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_ChallangehFilterInput = {
  all?: InputMaybe<Modum_Public_ChallangehFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_ChallangehFilterInput>;
  some?: InputMaybe<Modum_Public_ChallangehFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_ChallangelineweightFilterInput = {
  all?: InputMaybe<Modum_Public_ChallangelineweightFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_ChallangelineweightFilterInput>;
  some?: InputMaybe<Modum_Public_ChallangelineweightFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_LocalizationFilterInput = {
  all?: InputMaybe<Modum_Public_LocalizationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_LocalizationFilterInput>;
  some?: InputMaybe<Modum_Public_LocalizationFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_MarketitemratingFilterInput = {
  all?: InputMaybe<Modum_Public_MarketitemratingFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_MarketitemratingFilterInput>;
  some?: InputMaybe<Modum_Public_MarketitemratingFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_MarketitemuserFilterInput = {
  all?: InputMaybe<Modum_Public_MarketitemuserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_MarketitemuserFilterInput>;
  some?: InputMaybe<Modum_Public_MarketitemuserFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_MessageFilterInput = {
  all?: InputMaybe<Modum_Public_MessageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_MessageFilterInput>;
  some?: InputMaybe<Modum_Public_MessageFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_PointmovementFilterInput = {
  all?: InputMaybe<Modum_Public_PointmovementFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_PointmovementFilterInput>;
  some?: InputMaybe<Modum_Public_PointmovementFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_QuestionFilterInput = {
  all?: InputMaybe<Modum_Public_QuestionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_QuestionFilterInput>;
  some?: InputMaybe<Modum_Public_QuestionFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_UserFilterInput = {
  all?: InputMaybe<Modum_Public_UserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_UserFilterInput>;
  some?: InputMaybe<Modum_Public_UserFilterInput>;
};

export type ListFilterInputTypeOfModum_Public_UseranswerFilterInput = {
  all?: InputMaybe<Modum_Public_UseranswerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<Modum_Public_UseranswerFilterInput>;
  some?: InputMaybe<Modum_Public_UseranswerFilterInput>;
};

export type LocalizationInput = {
  desc: Scalars['String'];
  language: EnmLanguages;
};

export type LoginInputTypeInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LongOperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type Modum_VwMarketpoint = {
  __typename?: 'Modum_VwMarketpoint';
  marketpoint?: Maybe<Scalars['Float']>;
  userid?: Maybe<Scalars['Long']>;
};

export type Modum_VwMarketpointFilterInput = {
  and?: InputMaybe<Array<Modum_VwMarketpointFilterInput>>;
  marketpoint?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<Modum_VwMarketpointFilterInput>>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_Activity = {
  __typename?: 'Modum_public_Activity';
  activityname?: Maybe<Scalars['String']>;
  activitytime?: Maybe<Scalars['DateTime']>;
  astat?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['Int']>;
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['String']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  imageurl?: Maybe<Scalars['String']>;
  modum_public_Activityjoinedusers?: Maybe<Array<Modum_Public_Activityjoineduser>>;
};

export type Modum_Public_ActivityFilterInput = {
  activityname?: InputMaybe<StringOperationFilterInput>;
  activitytime?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<Modum_Public_ActivityFilterInput>>;
  astat?: InputMaybe<StringOperationFilterInput>;
  capacity?: InputMaybe<IntOperationFilterInput>;
  changetime?: InputMaybe<DateTimeOperationFilterInput>;
  changeuser?: InputMaybe<StringOperationFilterInput>;
  createtime?: InputMaybe<DateTimeOperationFilterInput>;
  createuser?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  imageurl?: InputMaybe<StringOperationFilterInput>;
  modum_public_Activityjoinedusers?: InputMaybe<ListFilterInputTypeOfModum_Public_ActivityjoineduserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_ActivityFilterInput>>;
};

export type Modum_Public_ActivityInput = {
  activityname?: InputMaybe<Scalars['String']>;
  activitytime?: InputMaybe<Scalars['DateTime']>;
  astat?: InputMaybe<Scalars['String']>;
  capacity?: InputMaybe<Scalars['Int']>;
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['String']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['String']>;
  id: Scalars['Long'];
  imageurl?: InputMaybe<Scalars['String']>;
  modum_public_Activityjoinedusers?: InputMaybe<Array<Modum_Public_ActivityjoineduserInput>>;
};

export type Modum_Public_Activityjoineduser = {
  __typename?: 'Modum_public_Activityjoineduser';
  activityid?: Maybe<Scalars['Long']>;
  id: Scalars['Long'];
  modum_public_Activity?: Maybe<Modum_Public_Activity>;
  modum_public_User?: Maybe<Modum_Public_User>;
  userid?: Maybe<Scalars['Long']>;
};

export type Modum_Public_ActivityjoineduserFilterInput = {
  activityid?: InputMaybe<LongOperationFilterInput>;
  and?: InputMaybe<Array<Modum_Public_ActivityjoineduserFilterInput>>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Activity?: InputMaybe<Modum_Public_ActivityFilterInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_ActivityjoineduserFilterInput>>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_ActivityjoineduserInput = {
  activityid?: InputMaybe<Scalars['Long']>;
  id: Scalars['Long'];
  modum_public_Activity?: InputMaybe<Modum_Public_ActivityInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserInput>;
  userid?: InputMaybe<Scalars['Long']>;
};

export type Modum_Public_Answer = {
  __typename?: 'Modum_public_Answer';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  id: Scalars['Long'];
  istrue?: Maybe<Scalars['Boolean']>;
  localizationkey?: Maybe<Scalars['Long']>;
  modum_public_Question: Modum_Public_Question;
  modum_public_Useranswers?: Maybe<Array<Modum_Public_Useranswer>>;
  questionid: Scalars['Long'];
  seqno?: Maybe<Scalars['Int']>;
};

export type Modum_Public_AnswerFilterInput = {
  and?: InputMaybe<Array<Modum_Public_AnswerFilterInput>>;
  changetime?: InputMaybe<DateTimeOperationFilterInput>;
  changeuser?: InputMaybe<LongOperationFilterInput>;
  createtime?: InputMaybe<DateTimeOperationFilterInput>;
  createuser?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  istrue?: InputMaybe<BooleanOperationFilterInput>;
  localizationkey?: InputMaybe<LongOperationFilterInput>;
  modum_public_Question?: InputMaybe<Modum_Public_QuestionFilterInput>;
  modum_public_Useranswers?: InputMaybe<ListFilterInputTypeOfModum_Public_UseranswerFilterInput>;
  or?: InputMaybe<Array<Modum_Public_AnswerFilterInput>>;
  questionid?: InputMaybe<LongOperationFilterInput>;
  seqno?: InputMaybe<IntOperationFilterInput>;
};

export type Modum_Public_AnswerInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  id: Scalars['Long'];
  istrue?: InputMaybe<Scalars['Boolean']>;
  localizationkey?: InputMaybe<Scalars['Long']>;
  modum_public_Question: Modum_Public_QuestionInput;
  modum_public_Useranswers?: InputMaybe<Array<Modum_Public_UseranswerInput>>;
  questionid: Scalars['Long'];
  seqno?: InputMaybe<Scalars['Int']>;
};

export type Modum_Public_Challangeh = {
  __typename?: 'Modum_public_Challangeh';
  challangename?: Maybe<Scalars['String']>;
  challangetypeid?: Maybe<Scalars['Long']>;
  cstat?: Maybe<Scalars['String']>;
  endtime?: Maybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  modum_public_Challangelineweights?: Maybe<Array<Modum_Public_Challangelineweight>>;
  modum_public_Challangetype?: Maybe<Modum_Public_Challangetype>;
  modum_public_CstatNavigation?: Maybe<Modum_Public_Challangestat>;
  starttime?: Maybe<Scalars['DateTime']>;
};

export type Modum_Public_ChallangehFilterInput = {
  and?: InputMaybe<Array<Modum_Public_ChallangehFilterInput>>;
  challangename?: InputMaybe<StringOperationFilterInput>;
  challangetypeid?: InputMaybe<LongOperationFilterInput>;
  cstat?: InputMaybe<StringOperationFilterInput>;
  endtime?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Challangelineweights?: InputMaybe<ListFilterInputTypeOfModum_Public_ChallangelineweightFilterInput>;
  modum_public_Challangetype?: InputMaybe<Modum_Public_ChallangetypeFilterInput>;
  modum_public_CstatNavigation?: InputMaybe<Modum_Public_ChallangestatFilterInput>;
  or?: InputMaybe<Array<Modum_Public_ChallangehFilterInput>>;
  starttime?: InputMaybe<DateTimeOperationFilterInput>;
};

export type Modum_Public_ChallangehInput = {
  challangename?: InputMaybe<Scalars['String']>;
  challangetypeid?: InputMaybe<Scalars['Long']>;
  cstat?: InputMaybe<Scalars['String']>;
  endtime?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Long'];
  modum_public_Challangelineweights?: InputMaybe<Array<Modum_Public_ChallangelineweightInput>>;
  modum_public_Challangetype?: InputMaybe<Modum_Public_ChallangetypeInput>;
  modum_public_CstatNavigation?: InputMaybe<Modum_Public_ChallangestatInput>;
  starttime?: InputMaybe<Scalars['DateTime']>;
};

export type Modum_Public_Challangelineweight = {
  __typename?: 'Modum_public_Challangelineweight';
  challangeid?: Maybe<Scalars['Long']>;
  currentweight?: Maybe<Scalars['Float']>;
  id: Scalars['Long'];
  initialweight?: Maybe<Scalars['Float']>;
  modum_public_Challange?: Maybe<Modum_Public_Challangeh>;
  modum_public_User?: Maybe<Modum_Public_User>;
  userid?: Maybe<Scalars['Long']>;
};

export type Modum_Public_ChallangelineweightFilterInput = {
  and?: InputMaybe<Array<Modum_Public_ChallangelineweightFilterInput>>;
  challangeid?: InputMaybe<LongOperationFilterInput>;
  currentweight?: InputMaybe<FloatOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  initialweight?: InputMaybe<FloatOperationFilterInput>;
  modum_public_Challange?: InputMaybe<Modum_Public_ChallangehFilterInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_ChallangelineweightFilterInput>>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_ChallangelineweightInput = {
  challangeid?: InputMaybe<Scalars['Long']>;
  currentweight?: InputMaybe<Scalars['Float']>;
  id: Scalars['Long'];
  initialweight?: InputMaybe<Scalars['Float']>;
  modum_public_Challange?: InputMaybe<Modum_Public_ChallangehInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserInput>;
  userid?: InputMaybe<Scalars['Long']>;
};

export type Modum_Public_Challangestat = {
  __typename?: 'Modum_public_Challangestat';
  cdesc?: Maybe<Scalars['String']>;
  cstat: Scalars['String'];
  modum_public_Challangehs?: Maybe<Array<Modum_Public_Challangeh>>;
};

export type Modum_Public_ChallangestatFilterInput = {
  and?: InputMaybe<Array<Modum_Public_ChallangestatFilterInput>>;
  cdesc?: InputMaybe<StringOperationFilterInput>;
  cstat?: InputMaybe<StringOperationFilterInput>;
  modum_public_Challangehs?: InputMaybe<ListFilterInputTypeOfModum_Public_ChallangehFilterInput>;
  or?: InputMaybe<Array<Modum_Public_ChallangestatFilterInput>>;
};

export type Modum_Public_ChallangestatInput = {
  cdesc?: InputMaybe<Scalars['String']>;
  cstat: Scalars['String'];
  modum_public_Challangehs?: InputMaybe<Array<Modum_Public_ChallangehInput>>;
};

export type Modum_Public_Challangetype = {
  __typename?: 'Modum_public_Challangetype';
  id: Scalars['Long'];
  modum_public_Challangehs?: Maybe<Array<Modum_Public_Challangeh>>;
  typename?: Maybe<Scalars['String']>;
};

export type Modum_Public_ChallangetypeFilterInput = {
  and?: InputMaybe<Array<Modum_Public_ChallangetypeFilterInput>>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Challangehs?: InputMaybe<ListFilterInputTypeOfModum_Public_ChallangehFilterInput>;
  or?: InputMaybe<Array<Modum_Public_ChallangetypeFilterInput>>;
  typename?: InputMaybe<StringOperationFilterInput>;
};

export type Modum_Public_ChallangetypeInput = {
  id: Scalars['Long'];
  modum_public_Challangehs?: InputMaybe<Array<Modum_Public_ChallangehInput>>;
  typename?: InputMaybe<Scalars['String']>;
};

export type Modum_Public_Language = {
  __typename?: 'Modum_public_Language';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  modum_public_Localizations?: Maybe<Array<Modum_Public_Localization>>;
  modum_public_Messages?: Maybe<Array<Modum_Public_Message>>;
  modum_public_Users?: Maybe<Array<Modum_Public_User>>;
  shortdesc?: Maybe<Scalars['String']>;
};

export type Modum_Public_LanguageFilterInput = {
  and?: InputMaybe<Array<Modum_Public_LanguageFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Localizations?: InputMaybe<ListFilterInputTypeOfModum_Public_LocalizationFilterInput>;
  modum_public_Messages?: InputMaybe<ListFilterInputTypeOfModum_Public_MessageFilterInput>;
  modum_public_Users?: InputMaybe<ListFilterInputTypeOfModum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_LanguageFilterInput>>;
  shortdesc?: InputMaybe<StringOperationFilterInput>;
};

export type Modum_Public_LanguageInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Long'];
  modum_public_Localizations?: InputMaybe<Array<Modum_Public_LocalizationInput>>;
  modum_public_Messages?: InputMaybe<Array<Modum_Public_MessageInput>>;
  modum_public_Users?: InputMaybe<Array<Modum_Public_UserInput>>;
  shortdesc?: InputMaybe<Scalars['String']>;
};

export type Modum_Public_Localization = {
  __typename?: 'Modum_public_Localization';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['Long']>;
  languageid: Scalars['Long'];
  localizationkey?: Maybe<Scalars['Long']>;
  modum_public_Language: Modum_Public_Language;
};

export type Modum_Public_LocalizationFilterInput = {
  and?: InputMaybe<Array<Modum_Public_LocalizationFilterInput>>;
  changetime?: InputMaybe<DateTimeOperationFilterInput>;
  changeuser?: InputMaybe<LongOperationFilterInput>;
  createtime?: InputMaybe<DateTimeOperationFilterInput>;
  createuser?: InputMaybe<LongOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  languageid?: InputMaybe<LongOperationFilterInput>;
  localizationkey?: InputMaybe<LongOperationFilterInput>;
  modum_public_Language?: InputMaybe<Modum_Public_LanguageFilterInput>;
  or?: InputMaybe<Array<Modum_Public_LocalizationFilterInput>>;
};

export type Modum_Public_LocalizationInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Long']>;
  languageid: Scalars['Long'];
  localizationkey?: InputMaybe<Scalars['Long']>;
  modum_public_Language: Modum_Public_LanguageInput;
};

export type Modum_Public_Marketitem = {
  __typename?: 'Modum_public_Marketitem';
  id: Scalars['Long'];
  imageurl?: Maybe<Scalars['String']>;
  marketitemname?: Maybe<Scalars['String']>;
  modum_public_Marketitemratings?: Maybe<Array<Modum_Public_Marketitemrating>>;
  modum_public_Marketitemusers?: Maybe<Array<Modum_Public_Marketitemuser>>;
  point?: Maybe<Scalars['Float']>;
};

export type Modum_Public_MarketitemFilterInput = {
  and?: InputMaybe<Array<Modum_Public_MarketitemFilterInput>>;
  id?: InputMaybe<LongOperationFilterInput>;
  imageurl?: InputMaybe<StringOperationFilterInput>;
  marketitemname?: InputMaybe<StringOperationFilterInput>;
  modum_public_Marketitemratings?: InputMaybe<ListFilterInputTypeOfModum_Public_MarketitemratingFilterInput>;
  modum_public_Marketitemusers?: InputMaybe<ListFilterInputTypeOfModum_Public_MarketitemuserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_MarketitemFilterInput>>;
  point?: InputMaybe<FloatOperationFilterInput>;
};

export type Modum_Public_MarketitemInput = {
  id: Scalars['Long'];
  imageurl?: InputMaybe<Scalars['String']>;
  marketitemname?: InputMaybe<Scalars['String']>;
  modum_public_Marketitemratings?: InputMaybe<Array<Modum_Public_MarketitemratingInput>>;
  modum_public_Marketitemusers?: InputMaybe<Array<Modum_Public_MarketitemuserInput>>;
  point?: InputMaybe<Scalars['Float']>;
};

export type Modum_Public_Marketitemrating = {
  __typename?: 'Modum_public_Marketitemrating';
  id: Scalars['Long'];
  marketitemid?: Maybe<Scalars['Long']>;
  modum_public_Marketitem?: Maybe<Modum_Public_Marketitem>;
  modum_public_User?: Maybe<Modum_Public_User>;
  rate?: Maybe<Scalars['Int']>;
  ratingdesc?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['Long']>;
};

export type Modum_Public_MarketitemratingFilterInput = {
  and?: InputMaybe<Array<Modum_Public_MarketitemratingFilterInput>>;
  id?: InputMaybe<LongOperationFilterInput>;
  marketitemid?: InputMaybe<LongOperationFilterInput>;
  modum_public_Marketitem?: InputMaybe<Modum_Public_MarketitemFilterInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_MarketitemratingFilterInput>>;
  rate?: InputMaybe<IntOperationFilterInput>;
  ratingdesc?: InputMaybe<StringOperationFilterInput>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_MarketitemratingInput = {
  id: Scalars['Long'];
  marketitemid?: InputMaybe<Scalars['Long']>;
  modum_public_Marketitem?: InputMaybe<Modum_Public_MarketitemInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserInput>;
  rate?: InputMaybe<Scalars['Int']>;
  ratingdesc?: InputMaybe<Scalars['String']>;
  userid?: InputMaybe<Scalars['Long']>;
};

export type Modum_Public_Marketitemuser = {
  __typename?: 'Modum_public_Marketitemuser';
  id: Scalars['Long'];
  marketitemid?: Maybe<Scalars['Long']>;
  modum_public_Marketitem?: Maybe<Modum_Public_Marketitem>;
  modum_public_User?: Maybe<Modum_Public_User>;
  userid?: Maybe<Scalars['Long']>;
};

export type Modum_Public_MarketitemuserFilterInput = {
  and?: InputMaybe<Array<Modum_Public_MarketitemuserFilterInput>>;
  id?: InputMaybe<LongOperationFilterInput>;
  marketitemid?: InputMaybe<LongOperationFilterInput>;
  modum_public_Marketitem?: InputMaybe<Modum_Public_MarketitemFilterInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_MarketitemuserFilterInput>>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_MarketitemuserInput = {
  id: Scalars['Long'];
  marketitemid?: InputMaybe<Scalars['Long']>;
  modum_public_Marketitem?: InputMaybe<Modum_Public_MarketitemInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserInput>;
  userid?: InputMaybe<Scalars['Long']>;
};

export type Modum_Public_Menuitem = {
  __typename?: 'Modum_public_Menuitem';
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  directory: Scalars['String'];
  iconname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  localizationkey?: Maybe<Scalars['Long']>;
  modum_public_InverseParent?: Maybe<Array<Modum_Public_Menuitem>>;
  modum_public_Parent?: Maybe<Modum_Public_Menuitem>;
  parentid?: Maybe<Scalars['Long']>;
};

export type Modum_Public_MenuitemInput = {
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  directory: Scalars['String'];
  iconname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Long']>;
  localizationkey?: InputMaybe<Scalars['Long']>;
  modum_public_InverseParent?: InputMaybe<Array<Modum_Public_MenuitemInput>>;
  modum_public_Parent?: InputMaybe<Modum_Public_MenuitemInput>;
  parentid?: InputMaybe<Scalars['Long']>;
};

export type Modum_Public_Message = {
  __typename?: 'Modum_public_Message';
  languageid: Scalars['Long'];
  messageid: Scalars['Long'];
  messageno: Scalars['Int'];
  messagetext?: Maybe<Scalars['String']>;
  messagetypeid: Scalars['Long'];
  modum_public_Language: Modum_Public_Language;
  modum_public_Messagetype: Modum_Public_Messagetype;
};

export type Modum_Public_MessageFilterInput = {
  and?: InputMaybe<Array<Modum_Public_MessageFilterInput>>;
  languageid?: InputMaybe<LongOperationFilterInput>;
  messageid?: InputMaybe<LongOperationFilterInput>;
  messageno?: InputMaybe<IntOperationFilterInput>;
  messagetext?: InputMaybe<StringOperationFilterInput>;
  messagetypeid?: InputMaybe<LongOperationFilterInput>;
  modum_public_Language?: InputMaybe<Modum_Public_LanguageFilterInput>;
  modum_public_Messagetype?: InputMaybe<Modum_Public_MessagetypeFilterInput>;
  or?: InputMaybe<Array<Modum_Public_MessageFilterInput>>;
};

export type Modum_Public_MessageInput = {
  languageid: Scalars['Long'];
  messageid: Scalars['Long'];
  messageno: Scalars['Int'];
  messagetext?: InputMaybe<Scalars['String']>;
  messagetypeid: Scalars['Long'];
  modum_public_Language: Modum_Public_LanguageInput;
  modum_public_Messagetype: Modum_Public_MessagetypeInput;
};

export type Modum_Public_Messagetype = {
  __typename?: 'Modum_public_Messagetype';
  description: Scalars['String'];
  messagetypeid: Scalars['Long'];
  modum_public_Messages?: Maybe<Array<Modum_Public_Message>>;
};

export type Modum_Public_MessagetypeFilterInput = {
  and?: InputMaybe<Array<Modum_Public_MessagetypeFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  messagetypeid?: InputMaybe<LongOperationFilterInput>;
  modum_public_Messages?: InputMaybe<ListFilterInputTypeOfModum_Public_MessageFilterInput>;
  or?: InputMaybe<Array<Modum_Public_MessagetypeFilterInput>>;
};

export type Modum_Public_MessagetypeInput = {
  description: Scalars['String'];
  messagetypeid: Scalars['Long'];
  modum_public_Messages?: InputMaybe<Array<Modum_Public_MessageInput>>;
};

export type Modum_Public_Mode = {
  __typename?: 'Modum_public_Mode';
  color?: Maybe<Scalars['String']>;
  iconname?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  modename?: Maybe<Scalars['String']>;
  seqno?: Maybe<Scalars['Short']>;
  size?: Maybe<Scalars['String']>;
};

export type Modum_Public_Motto = {
  __typename?: 'Modum_public_Motto';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  id: Scalars['Long'];
  mottoname?: Maybe<Scalars['String']>;
};

export type Modum_Public_Pointmovement = {
  __typename?: 'Modum_public_Pointmovement';
  id: Scalars['Long'];
  modum_public_Pointtype?: Maybe<Modum_Public_Pointtype>;
  modum_public_User?: Maybe<Modum_Public_User>;
  point?: Maybe<Scalars['Float']>;
  pointtypeid?: Maybe<Scalars['Long']>;
  userid?: Maybe<Scalars['Long']>;
};

export type Modum_Public_PointmovementFilterInput = {
  and?: InputMaybe<Array<Modum_Public_PointmovementFilterInput>>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Pointtype?: InputMaybe<Modum_Public_PointtypeFilterInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_PointmovementFilterInput>>;
  point?: InputMaybe<FloatOperationFilterInput>;
  pointtypeid?: InputMaybe<LongOperationFilterInput>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_PointmovementInput = {
  id: Scalars['Long'];
  modum_public_Pointtype?: InputMaybe<Modum_Public_PointtypeInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserInput>;
  point?: InputMaybe<Scalars['Float']>;
  pointtypeid?: InputMaybe<Scalars['Long']>;
  userid?: InputMaybe<Scalars['Long']>;
};

export type Modum_Public_Pointtype = {
  __typename?: 'Modum_public_Pointtype';
  direction?: Maybe<Scalars['Short']>;
  id: Scalars['Long'];
  modum_public_Pointmovements?: Maybe<Array<Modum_Public_Pointmovement>>;
  pointtypename?: Maybe<Scalars['String']>;
};

export type Modum_Public_PointtypeFilterInput = {
  and?: InputMaybe<Array<Modum_Public_PointtypeFilterInput>>;
  direction?: InputMaybe<ShortOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Pointmovements?: InputMaybe<ListFilterInputTypeOfModum_Public_PointmovementFilterInput>;
  or?: InputMaybe<Array<Modum_Public_PointtypeFilterInput>>;
  pointtypename?: InputMaybe<StringOperationFilterInput>;
};

export type Modum_Public_PointtypeInput = {
  direction?: InputMaybe<Scalars['Short']>;
  id: Scalars['Long'];
  modum_public_Pointmovements?: InputMaybe<Array<Modum_Public_PointmovementInput>>;
  pointtypename?: InputMaybe<Scalars['String']>;
};

export type Modum_Public_Poll = {
  __typename?: 'Modum_public_Poll';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  desclocalizationkey?: Maybe<Scalars['Long']>;
  enddate?: Maybe<Scalars['Date']>;
  id: Scalars['Long'];
  modum_public_Questions?: Maybe<Array<Modum_Public_Question>>;
  shortdesclocalizationkey?: Maybe<Scalars['Long']>;
  startdate?: Maybe<Scalars['Date']>;
};

export type Modum_Public_PollFilterInput = {
  and?: InputMaybe<Array<Modum_Public_PollFilterInput>>;
  changetime?: InputMaybe<DateTimeOperationFilterInput>;
  changeuser?: InputMaybe<LongOperationFilterInput>;
  createtime?: InputMaybe<DateTimeOperationFilterInput>;
  createuser?: InputMaybe<LongOperationFilterInput>;
  desclocalizationkey?: InputMaybe<LongOperationFilterInput>;
  enddate?: InputMaybe<DateOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Questions?: InputMaybe<ListFilterInputTypeOfModum_Public_QuestionFilterInput>;
  or?: InputMaybe<Array<Modum_Public_PollFilterInput>>;
  shortdesclocalizationkey?: InputMaybe<LongOperationFilterInput>;
  startdate?: InputMaybe<DateOperationFilterInput>;
};

export type Modum_Public_PollInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  desclocalizationkey?: InputMaybe<Scalars['Long']>;
  enddate?: InputMaybe<Scalars['Date']>;
  id: Scalars['Long'];
  modum_public_Questions?: InputMaybe<Array<Modum_Public_QuestionInput>>;
  shortdesclocalizationkey?: InputMaybe<Scalars['Long']>;
  startdate?: InputMaybe<Scalars['Date']>;
};

export type Modum_Public_Question = {
  __typename?: 'Modum_public_Question';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  id: Scalars['Long'];
  localizationkey?: Maybe<Scalars['Long']>;
  modum_public_Answers?: Maybe<Array<Modum_Public_Answer>>;
  modum_public_Poll: Modum_Public_Poll;
  modum_public_Questiontype: Modum_Public_Questiontype;
  pollid: Scalars['Long'];
  questiontypeid: Scalars['Long'];
};

export type Modum_Public_QuestionFilterInput = {
  and?: InputMaybe<Array<Modum_Public_QuestionFilterInput>>;
  changetime?: InputMaybe<DateTimeOperationFilterInput>;
  changeuser?: InputMaybe<LongOperationFilterInput>;
  createtime?: InputMaybe<DateTimeOperationFilterInput>;
  createuser?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  localizationkey?: InputMaybe<LongOperationFilterInput>;
  modum_public_Answers?: InputMaybe<ListFilterInputTypeOfModum_Public_AnswerFilterInput>;
  modum_public_Poll?: InputMaybe<Modum_Public_PollFilterInput>;
  modum_public_Questiontype?: InputMaybe<Modum_Public_QuestiontypeFilterInput>;
  or?: InputMaybe<Array<Modum_Public_QuestionFilterInput>>;
  pollid?: InputMaybe<LongOperationFilterInput>;
  questiontypeid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_QuestionInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  id: Scalars['Long'];
  localizationkey?: InputMaybe<Scalars['Long']>;
  modum_public_Answers?: InputMaybe<Array<Modum_Public_AnswerInput>>;
  modum_public_Poll: Modum_Public_PollInput;
  modum_public_Questiontype: Modum_Public_QuestiontypeInput;
  pollid: Scalars['Long'];
  questiontypeid: Scalars['Long'];
};

export type Modum_Public_Questiontype = {
  __typename?: 'Modum_public_Questiontype';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  modum_public_Questions?: Maybe<Array<Modum_Public_Question>>;
  shortdesc?: Maybe<Scalars['String']>;
};

export type Modum_Public_QuestiontypeFilterInput = {
  and?: InputMaybe<Array<Modum_Public_QuestiontypeFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Questions?: InputMaybe<ListFilterInputTypeOfModum_Public_QuestionFilterInput>;
  or?: InputMaybe<Array<Modum_Public_QuestiontypeFilterInput>>;
  shortdesc?: InputMaybe<StringOperationFilterInput>;
};

export type Modum_Public_QuestiontypeInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Long'];
  modum_public_Questions?: InputMaybe<Array<Modum_Public_QuestionInput>>;
  shortdesc?: InputMaybe<Scalars['String']>;
};

export type Modum_Public_User = {
  __typename?: 'Modum_public_User';
  changetime?: Maybe<Scalars['DateTime']>;
  changeuser?: Maybe<Scalars['Long']>;
  createtime?: Maybe<Scalars['DateTime']>;
  createuser?: Maybe<Scalars['Long']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Long'];
  imageurl?: Maybe<Scalars['String']>;
  languageid: Scalars['Long'];
  modum_public_Activityjoinedusers?: Maybe<Array<Modum_Public_Activityjoineduser>>;
  modum_public_Challangelineweights?: Maybe<Array<Modum_Public_Challangelineweight>>;
  modum_public_Language?: Maybe<Modum_Public_Language>;
  modum_public_Marketitemratings?: Maybe<Array<Modum_Public_Marketitemrating>>;
  modum_public_Marketitemusers?: Maybe<Array<Modum_Public_Marketitemuser>>;
  modum_public_Pointmovements?: Maybe<Array<Modum_Public_Pointmovement>>;
  modum_public_Useranswers?: Maybe<Array<Modum_Public_Useranswer>>;
  muser: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  upass: Scalars['String'];
  userdesc?: Maybe<Scalars['String']>;
  usernumber?: Maybe<Scalars['String']>;
};

export type Modum_Public_UserFilterInput = {
  and?: InputMaybe<Array<Modum_Public_UserFilterInput>>;
  changetime?: InputMaybe<DateTimeOperationFilterInput>;
  changeuser?: InputMaybe<LongOperationFilterInput>;
  createtime?: InputMaybe<DateTimeOperationFilterInput>;
  createuser?: InputMaybe<LongOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  imageurl?: InputMaybe<StringOperationFilterInput>;
  languageid?: InputMaybe<LongOperationFilterInput>;
  modum_public_Activityjoinedusers?: InputMaybe<ListFilterInputTypeOfModum_Public_ActivityjoineduserFilterInput>;
  modum_public_Challangelineweights?: InputMaybe<ListFilterInputTypeOfModum_Public_ChallangelineweightFilterInput>;
  modum_public_Language?: InputMaybe<Modum_Public_LanguageFilterInput>;
  modum_public_Marketitemratings?: InputMaybe<ListFilterInputTypeOfModum_Public_MarketitemratingFilterInput>;
  modum_public_Marketitemusers?: InputMaybe<ListFilterInputTypeOfModum_Public_MarketitemuserFilterInput>;
  modum_public_Pointmovements?: InputMaybe<ListFilterInputTypeOfModum_Public_PointmovementFilterInput>;
  modum_public_Useranswers?: InputMaybe<ListFilterInputTypeOfModum_Public_UseranswerFilterInput>;
  muser?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<Modum_Public_UserFilterInput>>;
  phone?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<BooleanOperationFilterInput>;
  upass?: InputMaybe<StringOperationFilterInput>;
  userdesc?: InputMaybe<StringOperationFilterInput>;
  usernumber?: InputMaybe<StringOperationFilterInput>;
};

export type Modum_Public_UserInput = {
  changetime?: InputMaybe<Scalars['DateTime']>;
  changeuser?: InputMaybe<Scalars['Long']>;
  createtime?: InputMaybe<Scalars['DateTime']>;
  createuser?: InputMaybe<Scalars['Long']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Long'];
  imageurl?: InputMaybe<Scalars['String']>;
  languageid: Scalars['Long'];
  modum_public_Activityjoinedusers?: InputMaybe<Array<Modum_Public_ActivityjoineduserInput>>;
  modum_public_Challangelineweights?: InputMaybe<Array<Modum_Public_ChallangelineweightInput>>;
  modum_public_Language?: InputMaybe<Modum_Public_LanguageInput>;
  modum_public_Marketitemratings?: InputMaybe<Array<Modum_Public_MarketitemratingInput>>;
  modum_public_Marketitemusers?: InputMaybe<Array<Modum_Public_MarketitemuserInput>>;
  modum_public_Pointmovements?: InputMaybe<Array<Modum_Public_PointmovementInput>>;
  modum_public_Useranswers?: InputMaybe<Array<Modum_Public_UseranswerInput>>;
  muser: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
  upass: Scalars['String'];
  userdesc?: InputMaybe<Scalars['String']>;
  usernumber?: InputMaybe<Scalars['String']>;
};

export type Modum_Public_Useranswer = {
  __typename?: 'Modum_public_Useranswer';
  answerid: Scalars['Long'];
  id: Scalars['Long'];
  modum_public_Answer?: Maybe<Modum_Public_Answer>;
  modum_public_User?: Maybe<Modum_Public_User>;
  userid: Scalars['Long'];
};

export type Modum_Public_UseranswerFilterInput = {
  and?: InputMaybe<Array<Modum_Public_UseranswerFilterInput>>;
  answerid?: InputMaybe<LongOperationFilterInput>;
  id?: InputMaybe<LongOperationFilterInput>;
  modum_public_Answer?: InputMaybe<Modum_Public_AnswerFilterInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserFilterInput>;
  or?: InputMaybe<Array<Modum_Public_UseranswerFilterInput>>;
  userid?: InputMaybe<LongOperationFilterInput>;
};

export type Modum_Public_UseranswerInput = {
  answerid: Scalars['Long'];
  id: Scalars['Long'];
  modum_public_Answer?: InputMaybe<Modum_Public_AnswerInput>;
  modum_public_User?: InputMaybe<Modum_Public_UserInput>;
  userid: Scalars['Long'];
};

export type Mutation = {
  __typename?: 'Mutation';
  insertListMenuItemMassProsses: ResultModel;
  insertMenuItem: ResultModel;
  insertMenuItemMassProsses: ResultModel;
  insertPollAnswer: ResultModel;
  login: ResultModelOfModum_Public_User;
  register: ResultModelOfModum_Public_User;
  spendPoints: ResultModel;
  toggleActivityJoin: ResultModel;
  updateMenuItem: ResultModel;
};


export type MutationInsertListMenuItemMassProssesArgs = {
  tupleList: Array<TupleOfModum_Public_MenuitemAndListOfLocalizationInput>;
};


export type MutationInsertMenuItemArgs = {
  menuitem: Modum_Public_MenuitemInput;
};


export type MutationInsertMenuItemMassProssesArgs = {
  loc: Array<LocalizationInput>;
  menuitem: Modum_Public_MenuitemInput;
};


export type MutationInsertPollAnswerArgs = {
  userAnswer: Array<Modum_Public_UseranswerInput>;
};


export type MutationLoginArgs = {
  loginInput: LoginInputTypeInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInputTypeInput;
};


export type MutationSpendPointsArgs = {
  marketitemuser: Modum_Public_MarketitemuserInput;
  pointmovement: Modum_Public_PointmovementInput;
};


export type MutationToggleActivityJoinArgs = {
  activityjoineduser: Modum_Public_ActivityjoineduserInput;
};


export type MutationUpdateMenuItemArgs = {
  menuitem: Modum_Public_MenuitemInput;
};

export type Query = {
  __typename?: 'Query';
  activities: Array<Modum_Public_Activity>;
  challanges: Array<ChallangeVm>;
  marketItemDetails?: Maybe<Modum_Public_Marketitem>;
  marketItems: Array<Modum_Public_Marketitem>;
  modes: Array<Modum_Public_Mode>;
  motto: ResultModelOfModum_Public_Motto;
  poll: Modum_Public_Poll;
  pollQuestionAnswers: Array<Modum_Public_Question>;
  selectMenuItem: ResultModelOfModum_Public_Menuitem;
  something?: Maybe<Modum_VwMarketpoint>;
  tuple: TupleOfIQueryableOfModum_Public_PollAndIQueryableOfModum_Public_Question;
  users: Array<Modum_Public_User>;
  welcome: Scalars['String'];
};


export type QueryMarketItemDetailsArgs = {
  where?: InputMaybe<Modum_Public_MarketitemFilterInput>;
};


export type QueryPollQuestionAnswersArgs = {
  where?: InputMaybe<Modum_Public_QuestionFilterInput>;
};


export type QuerySomethingArgs = {
  where?: InputMaybe<Modum_VwMarketpointFilterInput>;
};


export type QueryUsersArgs = {
  where?: InputMaybe<Modum_Public_UserFilterInput>;
};

export type RegisterInputTypeInput = {
  confirmPassword: Scalars['String'];
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  language: EnmLanguages;
  lastName: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type ResultModel = {
  __typename?: 'ResultModel';
  language?: Maybe<EnmLanguages>;
  messageNo?: Maybe<Scalars['Int']>;
  messageType?: Maybe<EnmMessageTypes>;
  messageView?: Maybe<Scalars['String']>;
  parameterList?: Maybe<Array<Scalars['String']>>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type ResultModelOfModum_Public_Menuitem = {
  __typename?: 'ResultModelOfModum_public_Menuitem';
  data?: Maybe<Modum_Public_Menuitem>;
  listData?: Maybe<Array<Modum_Public_Menuitem>>;
  messageView?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type ResultModelOfModum_Public_Motto = {
  __typename?: 'ResultModelOfModum_public_Motto';
  data?: Maybe<Modum_Public_Motto>;
  listData?: Maybe<Array<Modum_Public_Motto>>;
  messageView?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type ResultModelOfModum_Public_User = {
  __typename?: 'ResultModelOfModum_public_User';
  data?: Maybe<Modum_Public_User>;
  listData?: Maybe<Array<Modum_Public_User>>;
  messageView?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type ShortOperationFilterInput = {
  eq?: InputMaybe<Scalars['Short']>;
  gt?: InputMaybe<Scalars['Short']>;
  gte?: InputMaybe<Scalars['Short']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Short']>>>;
  lt?: InputMaybe<Scalars['Short']>;
  lte?: InputMaybe<Scalars['Short']>;
  neq?: InputMaybe<Scalars['Short']>;
  ngt?: InputMaybe<Scalars['Short']>;
  ngte?: InputMaybe<Scalars['Short']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Short']>>>;
  nlt?: InputMaybe<Scalars['Short']>;
  nlte?: InputMaybe<Scalars['Short']>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TupleOfIQueryableOfModum_Public_PollAndIQueryableOfModum_Public_Question = {
  __typename?: 'TupleOfIQueryableOfModum_public_PollAndIQueryableOfModum_public_Question';
  item1: Array<Modum_Public_Poll>;
  item2: Array<Modum_Public_Question>;
};

export type TupleOfModum_Public_MenuitemAndListOfLocalizationInput = {
  item1: Modum_Public_MenuitemInput;
  item2: Array<LocalizationInput>;
};

export enum EnmLanguages {
  En = 'EN',
  Tr = 'TR'
}

export enum EnmMessageTypes {
  Erorr = 'ERORR',
  Question = 'QUESTION',
  Succes = 'SUCCES'
}

export type GetWelcomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWelcomeQuery = { __typename?: 'Query', welcome: string };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Modum_public_User', id: any, userdesc?: string | null }> };

export type GetUsersByIdQueryVariables = Exact<{
  prmId: Scalars['Long'];
}>;


export type GetUsersByIdQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Modum_public_User', id: any, userdesc?: string | null }> };


export const GetWelcomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWelcome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"welcome"}}]}}]} as unknown as DocumentNode<GetWelcomeQuery, GetWelcomeQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userdesc"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prmId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prmId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userdesc"}}]}}]}}]} as unknown as DocumentNode<GetUsersByIdQuery, GetUsersByIdQueryVariables>;