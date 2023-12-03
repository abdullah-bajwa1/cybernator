export const inputActionOptions = ["none", "mask", "block", "block (muted)"];
export const outputActionOptions = ["none", "mask", "block", "block (muted)"];
export const notificationActionOptions = ["none", "Track", "track and alert"];
export const thresholdOptions = ["none", "low", "medium", "high"];
export const notificationFrequencyOptions = [
  "none",
  "daily",
  "weekly",
  "fortnightly",
  "monthly",
];
export const notificationTargetOptions = [
  "HR",
  "SOC",
  "Compliance",
  "supervisor",
];

const policies = [
  {
    name: "Customer Support",
    policyClasses: [
      {
        name: "RBAC Policies",
        policies: [
          {
            policy_name: "read_access_to_same_department",
            enabled: true,
            constraint_type: "Conditional",
            input_action: "none",
            output_action: "none",
            notification_action: "none",
            notify_user: true,
            threshold: "low",
            notification_frequency: "daily",
            notification_target: ["SOC", "supervisor"],
            daily_alert_threshold: 10,
            weekly_alert_threshold: 50,
          },
        ],
      },
      {
        name: "PII Policies",
        policies: [
          {
            policy_name: "SSN",
            enabled: true,
            constraint_type: "regex",
            input_action: "mask",
            output_action: "mask",
            notification_action: "Track",
            notify_user: true,
            threshold: "low",
            notification_frequency: "weekly",
            notification_target: ["SOC", "supervisor"],
            daily_alert_threshold: 10,
            weekly_alert_threshold: 50,
          },
          {
            policy_name: "Credit Card",
            constraint_type: "regex",
            enabled: true,
            input_action: "mask",
            output_action: "mask",
            notification_action: "Track",
            notify_user: true,
            threshold: "low",
            notification_frequency: "weekly",
            notification_target: ["SOC", "supervisor"],
            daily_alert_threshold: 10,
            weekly_alert_threshold: 50,
          },
        ],
      },
      {
        name: "Security Policies",
        policies: [
          {
            policy_name: "detect_and_block_code",
            enabled: false,
            constraint_type: "regex",
            input_action: "block",
            output_action: "none",
            notification_action: "none",
            notify_user: false,
            threshold: "low",
            notification_frequency: "daily",
            notification_target: ["SOC", "supervisor", "Compliance"],
            daily_alert_threshold: 5,
            weekly_alert_threshold: 25,
          },
          {
            policy_name: "Prompt Injection",
            enabled: false,
            constraint_type: "Advanced (AI)",
            input_action: "block",
            output_action: "none",
            notification_action: "none",
            notify_user: false,
            threshold: "low",
            notification_frequency: "daily",
            notification_target: ["SOC", "supervisor", "Compliance"],
            daily_alert_threshold: 5,
            weekly_alert_threshold: 25,
          },
        ],
      },
      {
        name: "HR Policies",
        policies: [
          {
            policy_name: "racist",
            enabled: false,
            constraint_type: "Advanced (AI)",
            input_action: "mask",
            output_action: "block",
            notification_action: "track",
            notify_user: false,
            threshold: "high",
            notification_frequency: "none",
            notification_target: ["HR", "supervisor", "Compliance"],
            daily_alert_threshold: 5,
            weekly_alert_threshold: 25,
          },
        ],
      },
    ],
  },
];

export default policies;
